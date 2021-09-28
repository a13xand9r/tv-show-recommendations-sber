import { IconStarFill, IconCalendar, IconAccessibility, IconEvent } from '@sberdevices/plasma-icons'
import { Card, CardBody, CardContent, TextBox, Image, TextBoxBigTitle, Cell, CellIcon, TextBoxSubTitle, CardMedia } from '@sberdevices/plasma-ui'
import styled from 'styled-components'
import { TVShowType } from '../types'

const StyledImage = styled(Image)`
  max-width: 400px;
  margin: 0 auto;
`
const StyledTextBox = styled(TextBox)`
  margin-top: 1rem;
  /* margin-bottom: 4rem; */
`

export const MovieCard = ({ movie }: { movie: TVShowType }) => {

  return (
    <div>
      {/* <StyledImage
        src={movie.img}
      // style={{ width: "330px", height: "550px", marginBottom: "5px" }}
      /> */}
      {/* <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.img}`} alt="" /> */}
      <Card>
        <CardBody>
          <CardMedia
            src={movie.img}
            placeholder="/images/320_320_1.jpg"
            ratio="3/4"
          />
          <CardContent style={{ height: '100%', padding: '1.5rem' }} cover={false}>
            <TextBox>
              <TextBoxBigTitle>{movie.name}</TextBoxBigTitle>
            </TextBox>
            <Cell
              contentLeft={<CellIcon>
                <IconStarFill />
              </CellIcon>}
              content={<TextBox><TextBoxSubTitle>Оценка: </TextBoxSubTitle><TextBoxSubTitle>{movie.rate}</TextBoxSubTitle></TextBox>}
              alignRight="center"
            />
            <Cell
              contentLeft={<CellIcon>
                <IconEvent />
              </CellIcon>}
              content={<TextBox><TextBoxSubTitle>Год: </TextBoxSubTitle><TextBoxSubTitle>{movie.year}</TextBoxSubTitle></TextBox>}
              alignRight="center"
            />
            <Cell
              contentLeft={<CellIcon>
                <IconAccessibility />
              </CellIcon>}
              content={<TextBox><TextBoxSubTitle>Жанр: </TextBoxSubTitle><TextBoxSubTitle>{movie.genres}</TextBoxSubTitle></TextBox>}
              alignRight="center"
            />
            <StyledTextBox>
              <TextBoxBigTitle>Описание</TextBoxBigTitle>
              <TextBoxSubTitle>«{movie.description}»</TextBoxSubTitle>
            </StyledTextBox>
          </CardContent>
        </CardBody>
      </Card>
      
    </div>
  )
}