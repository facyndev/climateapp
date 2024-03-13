import PropType from 'prop-types';
import { Container, Header, Body, Footer } from './info.styles';
import { useState } from 'react';

export const Info = ({ weatherInfo }) => {
    /*
        La API nos da la temperatura en grados Kelvin
        entonces debemos realizar la siguiente formula:
        T(°C)=T(K) − 273.15 --> Obtenemos grados Celsius
        T(°F)=T(°C) × 9/5 + 32 --> Obtenemos grados Fahrenheit
    */
    const [temperatureType, setTemperatureType] = useState('c');
    const kelvin = 273.15;
    const temperature = temperatureType === 'c' ? parseInt(weatherInfo.main.temp - kelvin) : parseInt((weatherInfo.main.temp - kelvin) * 9 / 5 + 32);

    return (
        <Container>
            <Header>
                <h3>{weatherInfo.name}</h3>
                <div className='temperature'>
                    <span>{temperature}</span>
                    <div className='temperature__type'>
                        <span className={`temperature__type-item ${temperatureType === 'c' ? 'active' : ''}`} onClick={() => setTemperatureType('c')}>° C</span>
                        <span>|</span>
                        <span className={`temperature__type-item ${temperatureType === 'f' ? 'active' : ''}`} onClick={() => setTemperatureType('f')}>° F</span>
                    </div>
                </div>
            </Header>
            <Body>
                <img src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`} alt={weatherInfo.weather.map((w) => w.description).join(', ')} />
                <div>
                    <h4>{weatherInfo.weather.map((w) => w.main).join(', ')}</h4>
                    <p>{weatherInfo.weather.map((w) => w.description).join(', ')}</p>
                </div>
            </Body>
            <Footer>
                <span>Humedad: {weatherInfo.main.humidity}%</span>
                <span>Viento: a {weatherInfo.wind.speed} km/h</span>
            </Footer>
        </Container>
    )
}

Info.propTypes = {
    weatherInfo: PropType.object.isRequired
}


