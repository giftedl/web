/* -----------------------------------------------------------------------   * <copyright company="Microsoft Corporation"> *   Copyright (c) Microsoft Corporation.  All rights reserved. * </copyright> * ----------------------------------------------------------------------- */
"use server";

export async function getWeatherData() {
  const parameters = new URLSearchParams({
    q: "Kansas City",
    appid: process.env.OWM_KEY as string,
    units: "imperial",
  });

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?${parameters.toString()}`;
  const weatherRequest = await fetch(apiUrl);
  const json: { main: { temp: string, feels_like: string }, weather: { description: string }[] } = await weatherRequest.json()

  return {
    ...json.main,
    ...(json.weather[0])
  };
}
