// OpenWeather's /forecast endpoint returns a reading every 3 hours. Group the
// readings by day in the city's own time zone and keep the one closest to noon,
// so the forecast row shows one reading for each of the next few days.
export default function dailyForecast(forecast, days = 5) {
    if (!forecast || !forecast.list) return [];

    const offset = forecast.city?.timezone ?? 0; // seconds from UTC
    const byDay = new Map();

    forecast.list.forEach((reading) => {
        const local = new Date((reading.dt + offset) * 1000);
        const dayKey = local.toISOString().slice(0, 10);
        const distanceFromNoon = Math.abs(local.getUTCHours() - 12);
        const current = byDay.get(dayKey);

        if (!current || distanceFromNoon < current.distanceFromNoon) {
            byDay.set(dayKey, { reading, local, distanceFromNoon });
        }
    });

    return [...byDay.values()]
        .slice(0, days)
        .map(({ reading, local }) => ({
            ...reading,
            weekday: local.toLocaleDateString('en-US', { weekday: 'short', timeZone: 'UTC' }),
        }));
}
