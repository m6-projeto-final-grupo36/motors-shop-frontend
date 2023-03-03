import { useContext, useEffect, useState } from "react";
import { IComment } from "../../Providers/AnnouncementProvider";
import { UserContext } from "../../Providers/UserProvider";
import { Container, ContainerInput, Input } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { createCommentSchema } from "../../schemas/comments";
import { api } from "../../services/api";
import moment from 'moment'
import "moment/locale/pt-br";


interface ICommentary{
  comments: IComment[];
  announcementId: string
}

interface ICommentRetrieve{
  text: string;
}

export const Commentary = ({announcementId, comments}: ICommentary) => {

  const [commentsToRender, setCommentsToRender] = useState<IComment[]>([])

  useEffect(() => {
    setCommentsToRender(comments)
  }, [comments])

  const {data} = useContext(UserContext)

  let user = ''

  if (Object.keys(data).length){
    user = data.token
  }

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ICommentRetrieve>({
    resolver: yupResolver(createCommentSchema),
  });

  const handleComment = async(data: ICommentRetrieve) => {
   
    api.defaults.headers.common['Authorization'] = `Bearer ${user}`
    await api.post(`/comments/${announcementId}`, {
      ...data
    })
    .then(res => setCommentsToRender((oldValues) => [...oldValues, res.data]))
    .catch(err => console.log(err))
  }

  return (
    <>
    <Container>
      <div className="comments">
        <h3 className="title">Comentários</h3>
        <>
        {
          commentsToRender.length ? commentsToRender.map(elem => {
            const date = moment(`${elem.updated_at}`, 'YYYY-MM-DD').fromNow()

          return (<div className="cardCommentary">
            <div className="cardHeader">
              <div className="cardImg">
                <p className="cardNameImg">
                  {elem.user.name.split(' ')[0][0]}
                  {data.user.name.split(" ")[1] && data.user.name.split(" ")[1][0]}
                </p>
              </div>
              <div className="cardTitle">{elem.user.name}</div>
              <p className="point"></p>
              <p className="date">{date}</p>
            </div>
            <div className="cardComments">
              <p className="comment">
                {elem.text}
              </p>
            </div>
          </div>)
            })
          : 
          <span>Sem comentários</span>
        }
        </>

      </div>

     
      <ContainerInput>
      <div className="containerInput">
        <div className="cardHeader">
          {
            Object.keys(data).length ?
            <div className="cardImg5">
              <p className="cardNameImg">
                {data.user.name.split(' ')[0][0]}
                {data.user.name.split(" ")[1] && data.user.name.split(" ")[1][0]}
              </p>
            </div>
            :
            <span style={{'display': 'none'}}></span>
          }
          {
              Object.keys(data).length ?
              <div className="cardTitle">{data.user.name}</div>
              : 
              <span style={{'display': 'none'}}></span>
          }
        </div>
        <form onSubmit={handleSubmit(handleComment)}>
          <div className="divInput">
            <Input {...register('text')} placeholder="Carro muito confortável, foi uma ótima experiência de compra..." />
          </div>

          <p>{errors.text?.message}</p>

          <div className="divButton">
            {
              Object.keys(data).length ? 
              <button type="submit" className="btn">Comentar</button>
              :
              <button className="btn" disabled>Comentar</button>
            }
          </div>
        </form>

          <div className="feedbacks">
            <div className="divFeedback">
              <p className="pFeedback">Gostei muito!</p>
              <p className="pFeedback2">Incrível</p>
            </div>

            <div className="divFeedback2">
              <p className="pFeedback3">Recomendarei para os meus amigos!</p>
            </div>
          </div>
      </div>
      </ContainerInput>
      
    </Container>
      </>
  );
};

