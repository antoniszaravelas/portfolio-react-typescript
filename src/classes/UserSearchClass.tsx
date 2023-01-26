import { Component } from "react";
import { Input } from "../state/styledComponents";

interface UserSearchClassProps {
  people: string[];
}

interface UserSearchState {
  people: string[] | undefined;
}

// people as a prop

class UserSearchClass extends Component<UserSearchClassProps> {
  state: UserSearchState = {
    people: [],
  };

  render() {
    const { people } = this.state;

    return (
      <>
        <div>Search for user by typing in the name: </div>
        <br />
        <Input
          onChange={(e) =>
            this.setState({
              people: this.props.people.filter((people) =>
                Boolean(e.target.value)
                  ? people.toLowerCase().includes(e.target.value)
                  : 0
              ),
            })
          }
          type="text"
        />
        {people && people.map((people) => <div key={people}>{people}</div>)}
      </>
    );
  }
}

export default UserSearchClass;
