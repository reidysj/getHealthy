import { axiosPost } from "./customAxios";

const handleSubmit = (
  e: { preventDefault: () => void },
  route: string,
  payload: any
) => {
  e.preventDefault();
  axiosPost(route, payload).then((data) => {
    if (data.token) localStorage.setItem("token", data.token);
    return data;
  });
};

export { handleSubmit };
