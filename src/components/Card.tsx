import {
  Container,
  Image,
  Name,
  Item,
  ContainerItems,
  Description,
  Link,
} from "../styles/Card";
import {
  FaUserFriends,
  FaUserCheck,
  FaBook,
  FaHome,
  FaGithub,
  FaCompass,
} from "react-icons/fa";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function CardContainer() {
  const { data } = useContext(DataContext);
  return (
    <>
      {data && (
        <Container>
          <Image src={data.avatar} />
          <Name>{data.name}</Name>
          <ContainerItems>
            <Item title="Followers">
              {data.followers}&nbsp;
              <FaUserFriends />
            </Item>
            <Item title="Following">
              {data.following}&nbsp;
              <FaUserCheck />
            </Item>
            <Link
              href={`https://github.com/${data.login}?tab=repositories`}
              title="Repositories"
            >
              {data.repositories}&nbsp;
              <FaBook />
            </Link>
            {data.portifolioLink && (
              <Link title="Portifolio" href={data.portifolioLink}>
                <FaHome />
              </Link>
            )}
            <Link title="Github" href={`https://github.com/${data.login}`}>
              <FaGithub />
            </Link>
          </ContainerItems>
          {data.location && (
            <Item>
              <FaCompass />
              &nbsp;{data.location}
            </Item>
          )}
          {data.description && (
            <Description>
              <i>{data.description}</i>
            </Description>
          )}
        </Container>
      )}
    </>
  );
}
