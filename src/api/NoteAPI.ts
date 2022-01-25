interface TODOValues {
  title: string;
  description: string;
}

const API = {
  getTODOList: async () => {
    const URL = "http://localhost:8080/todo";
    const data = await fetch(URL);
    const todoList = await data.json();

    return todoList;
  },

  postTODO: async ({ title, description }: TODOValues): Promise<Response> => {
    const URL = "http://localhost:8080/todo";
    const response = await fetch(URL, {
      method: "post",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ title, description }),
    });
    return response;
  },
};

export default API;
