export const LoginModule = async([email, password]: any) => {
    const url = "";
    console.log(email, password);
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        const res = await response.json();
        console.log(res);
    } catch (error:any) {
        console.error('Error al realizar la solicitud:', error.message);
    }
}
