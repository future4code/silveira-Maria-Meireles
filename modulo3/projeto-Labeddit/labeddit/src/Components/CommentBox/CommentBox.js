import axios from "axios";
import { token } from "../../constants/tokens";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../Hooks/useForm";


const CommentBox = (postId) => {
    const [form, onChangeInputs, clearForm] = useForm({ body: "" });
    const postID = postId.postId;

    const onSubmitComment = (event) => {
      event.preventDefault();
      sendNewComment();
      clearForm()
    }

      const sendNewComment = () => {
        const url = `${BASE_URL}/posts/${postID}/comments`;
        const acessToken = token;

        axios
          .post(url, form, {
            headers: {
              Authorization: acessToken,
            },
          })
          .then((res) => {
            alert("Comentário criado!");
          })
          .catch((err) => {
            alert("Algo deu errao. Por favor, tente novamente.");
          });
      };

    return (
        <div>
            <form onSubmit={onSubmitComment}>
                <input 
                type='text'
                placeholder='Insira um comentário'
                name={"body"}
                value={form.body}
                onChange={onChangeInputs}
                required
                />

                <button type='submit'> 
                Enviar 
                </button>
            </form>
        </div>
    )
}

export default CommentBox;