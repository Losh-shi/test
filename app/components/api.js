export const fetchLocationId = async city => {//获得城市id
  const response = await fetch(
    `https://www.metaweather.com/api/location/search/?query=${city}`,
  );
  const locations = await response.json();
  return locations[0].woeid;
};

export const fetchWeather0 = async woeid => {//根据城市id获取天气信息
  const response = await fetch(
    `https://www.metaweather.com/api/location/${woeid}/`,
  );
  const { title, consolidated_weather,
    time,sun_rise, sun_set,} = await response.json();

  const { weather_state_name, the_temp,min_temp,max_temp,wind_direction_compass
    ,wind_speed,wind_direction,air_pressure,humidity,visibility,predictability } = consolidated_weather[0];

  return {
    location: title,
    weather: weather_state_name,
    temperature: the_temp,
    min_temp:min_temp,
    max_temp:max_temp,
    wind_direction_compass:wind_direction_compass,
    wind_speed:wind_speed,
    wind_direction: wind_direction,
    air_pressure: air_pressure,
    humidity:humidity,
    visibility:visibility,
    predictability:predictability,
    time:time,
    sun_rise:sun_rise,
    sun_set:sun_set,
    
  };
};


export const fetchWeather1 = async woeid => {//根据城市id获取天气信息
  const response = await fetch(
    `https://www.metaweather.com/api/location/${woeid}/`,
  );
  const { title, consolidated_weather } = await response.json();
  const { weather_state_name, the_temp } = consolidated_weather[1];

  return {
    location: title,
    weather: weather_state_name,
    temperature: the_temp,
  };
};

export const fetchWeather2 = async woeid => {//根据城市id获取天气信息
  const response = await fetch(
    `https://www.metaweather.com/api/location/${woeid}/`,
  );
  const { title, consolidated_weather } = await response.json();
  const { weather_state_name, the_temp } = consolidated_weather[2];

  return {
    location: title,
    weather: weather_state_name,
    temperature: the_temp,
  };
};
export const fetchWeather3 = async woeid => {//根据城市id获取天气信息
  const response = await fetch(
    `https://www.metaweather.com/api/location/${woeid}/`,
  );
  const { title, consolidated_weather } = await response.json();
  const { weather_state_name, the_temp } = consolidated_weather[3];

  return {
    location: title,
    weather: weather_state_name,
    temperature: the_temp,
  };
};
export const fetchWeather4 = async woeid => {//根据城市id获取天气信息
  const response = await fetch(
    `https://www.metaweather.com/api/location/${woeid}/`,
  );
  const { title, consolidated_weather } = await response.json();
  const { weather_state_name, the_temp } = consolidated_weather[4];

  return {
    location: title,
    weather: weather_state_name,
    temperature: the_temp,
  };
};




