import { Card } from "./components/Card";
import { SideBar } from "./components/SideBar";
import { ProfileImage } from "./components/ProfileImage";
import { useEffect, useState } from "react";

import axios from "axios";
import { StackItemList } from "./components/StackItemList";

export function App() {

  interface User {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string;
    company?: null;
    blog: string;
    location: string;
    email?: null;
    hireable?: null;
    bio: string;
    twitter_username?: null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
  }

  const [user, setUser] = useState<User>();
  const [userName, setUserName] = useState<string>("KaueSabinoSRV17");

  useEffect(() => {
    const apiUrl = `https://api.github.com/users/${userName}`;

    axios.get(apiUrl).then((user) => setUser(user.data));
  }, [userName]);

  return (
    <SideBar>
      <Card>
        <ProfileImage borderColor="image-border-green" />
        <h3 className="mt-8 mb-3 text-2xl">{user?.name}</h3>
        <p className="text-sm">{user?.bio}</p>
      </Card>
      <Card>
        <li>{user?.location}</li>
        <li>{user?.company}</li>
        <li>{user?.login}</li>
      </Card>
      <Card cardTitle="Tecnologias">
        <StackItemList />
      </Card>
      <Card cardTitle="Experiências">

      </Card>
    </SideBar>
  );
}
