const sendRequest = async(serverUrl, secondPartUrl, requestBody = {}) => {
    try {
        const response = await fetch(serverUrl + secondPartUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody),
        });

        return await response.json();
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Something went wrong! ', error);
    }
};

export default sendRequest;
