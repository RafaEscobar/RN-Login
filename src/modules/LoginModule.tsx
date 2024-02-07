export const LoginModule = async ([email, password]: any) => {
    try {
        const credentials = {
            
        }
        
        const url = "http://127.0.0.1:8000/api/login";

        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        // const response = await fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         email,
        //         password
        //     }),
        // });

        /*
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        */

        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }

        const res = await response.json();
        console.log(res);
    } catch (error) {
        console.error('Error al realizar la solicitud:', error.message);
    }
}
