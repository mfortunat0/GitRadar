import Axios from "axios";
import { Input, Button, Container } from "../styles/Form";
import { FaSearch } from "react-icons/fa";
import { useContext, useRef } from "react";
import { DataContext } from "../context/DataContext";

export default function Form() {
  const { setData } = useContext(DataContext);
  const inputRef = useRef<HTMLInputElement>();

  const formatData = async () => {
    if (inputRef.current.value) {
      try {
        const Data = (
          await Axios.get(
            `https://api.github.com/users/${inputRef.current.value.toLowerCase()}`
          )
        ).data;

        if (Data) {
          setData(null);
          const data = {
            followers: Data.followers || 0,
            following: Data.following || 0,
            repositories: Data.public_repos,
            portifolioLink: Data.blog,
            location: Data.location,
            description: Data.bio,
            name: Data.name,
            avatar: Data.avatar_url,
            login: Data.login,
          };
          setData(data);
          inputRef.current.value = "";
        }
      } catch (error) {
        alert("User not found");
      }
    }
  };
  return (
    <Container onSubmit={(e) => e.preventDefault()}>
      <Input required ref={inputRef} />
      <Button onClick={formatData}>
        <FaSearch />
      </Button>
    </Container>
  );
}
