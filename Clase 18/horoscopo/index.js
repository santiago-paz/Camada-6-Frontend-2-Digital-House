const options = {
  method: "POST",
  headers: {
    "X-RapidAPI-Key": "58f9096e60mshcefa63e26a3e23dp14d0acjsn79c570c0ffc8",
    "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
  },
};

fetch(
  "https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=pisces&day=today",
  options
)
  .then((response) => response.json())
  .then((response) => {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "58f9096e60mshcefa63e26a3e23dp14d0acjsn79c570c0ffc8",
        "X-RapidAPI-Host": "google-translate78.p.rapidapi.com",
      },
      body: JSON.stringify({
        text: response.description,
        source: "en",
        target: "es",
      }),
    };

    fetch("https://google-translate78.p.rapidapi.com/translate", options)
      .then((response) => response.json())
      .then((response) => {
        const horoscopo = response.translations.translation;

        const p = document.createElement("p");
        p.innerText = horoscopo;

        document.body.appendChild(p);

        hacerAlgoConMiRespuesta(horoscopo);
      })
      .catch((err) => console.error(err));
  })
  .catch((err) => console.error(err));
