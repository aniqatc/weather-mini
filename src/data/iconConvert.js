export default function iconConvert(icon) {
    if (icon) {
        switch(icon) {
            case '01d':
                return 'bi-sun';
            case '01n':
                return 'bi-moon';
            case '02d':
            case '02n':
                return 'bi-cloud-sun';
            case '03d':
            case '03n':
            case '04d':
            case '04n':
                return 'bi-cloud';
            case '09d':
            case '09n':
                return 'bi-cloud-rain';
            case '10d':
            case '10n':
                return 'bi-cloud-drizzle';
            case '11d':
            case '11n':
                return 'bi-cloud-lightning';
            case '13d':
            case '13n':
                return 'bi-snow';
            case '50d':
            case '50n':
                return 'bi-cloud-fog';
            default:
                return 'bi-question-circle';
        }
    }
}

