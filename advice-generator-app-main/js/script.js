const API_LINK = "https://api.adviceslip.com/advice"

const fetchNewAdvice = async () => {
    const resp = fetch(API_LINK);
    console.log(resp)
};

fetchNewAdvice()