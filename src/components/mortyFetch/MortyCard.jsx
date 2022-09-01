import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
const MortyCard = (props) => {
  return (
    <>
      <Card>
        <CardImg
          alt="Card image cap"
          src={props.character.image}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">{props.character.name}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {props.character.species}
          </CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </>
  );
};

export default MortyCard;
