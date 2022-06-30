import apiOrigin from "./api";

export const getAllLectures = () => {
    return fetch(`${apiOrigin}/lectures`, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => {
        if (!res.ok) {
            throw res;
        }
        return res.json();
    });
};
