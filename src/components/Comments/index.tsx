import { useContext, useEffect, useState } from "react";
import { IComment } from "../../Providers/AnnouncementProvider";
import { UserContext } from "../../Providers/UserProvider";
import { Container, ContainerInput, Input } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { createCommentSchema } from "../../schemas/comments";
import { api } from "../../services/api";

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
            
            let dateToRender = '0'

            let intervalDay = 0

            let intervalMonth = 0

            const day = elem.updated_at.split('-')[2]

            const month = elem.updated_at.split('-')[1]

            const dayToday = new Date().getDate()
           
            const monthToday = new Date().getMonth() + 1
            
            intervalDay = dayToday - +day
            
            intervalMonth = monthToday - +month

            if (intervalDay <= 0) {
              dateToRender = '0 dias'
            }else if (intervalDay <= 29){
              dateToRender = `${intervalDay} dias`
            }else{
              if(intervalMonth <= 1){
                dateToRender = '1 mês'
              }else if (intervalMonth <= 12){
                dateToRender = `${intervalMonth} meses`
              }
            }

          return (<div className="cardCommentary">
            <div className="cardHeader">
              <div className="cardImg">
                <p className="cardNameImg">{elem.user.name.split(' ')[0][0]}{elem.user.name.split(' ')[1][0]}</p>
              </div>
              <div className="cardTitle">{elem.user.name}</div>
              <p className="point"></p>
              <p className="date">há {dateToRender}</p>
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
              <p className="cardNameImg">{data.user.name.split(' ')[0][0]}{data.user.name.split(' ')[1][0]}</p>
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
              <button type="submit" className="btn" onClick={() => console.log()}>Comentar</button>
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

