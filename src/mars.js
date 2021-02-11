export class Mars {
  static weatherMars() {
    return fetch(`https://api.nasa.gov/insight_weather/?api_key=${process.env.API_KEY}&feedtype=json`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}

export class Curiosity {
  static async weatherRover() {
    return fetch(`https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}