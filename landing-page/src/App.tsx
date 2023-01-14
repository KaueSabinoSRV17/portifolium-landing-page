import { Card } from './components/Card';
import { SideBar } from './components/SideBar';
import { ProfileImage } from './components/ProfileImage';
import { useEffect, useState } from 'react';

import axios from 'axios';
import { StackItemList } from './components/StackItemList';
import { ExperienceList } from './components/ExperienceList';
import { Title } from './components/Title';

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
    company: string | undefined;
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
  const [userName, setUserName] = useState<string>('KaueSabinoSRV17');

  useEffect(() => {
    const apiUrl = `https://api.github.com/users/${userName}`;

    axios.get(apiUrl).then((user) => setUser(user.data));
  }, [userName]);

  const truncatedName = user?.name.split(' ').slice(0, 2).join(' ')

  return (
    <main className='flex gap-[60px]'>
      <SideBar>
        <Card>
          <ProfileImage borderColor='image-border-green' />
          <h3 className='mt-8 mb-[10px] text-2xl text-center font-bold'>{truncatedName}</h3>
          <p className='text-sm text-center mb-4'>{user?.bio}</p>
        </Card>
        <Card>
          <ul>
            <li>{user?.location}</li>
            <li>{user?.company}</li>
            <li>{user?.login}</li>
          </ul>
        </Card>
        <Card cardTitle='Tecnologias'>
          <StackItemList />
        </Card>
        <Card cardTitle='Experiências'>
          <ExperienceList experiences={[{
            title: user?.company,
            startDate: new Date(2022, 7, 4),
            description: 'Java Fullstack Developer'
          }]} />
        </Card>
        <Card cardTitle='Educação'>
          <ExperienceList experiences={[
            {
              title: 'Unicesumar',
              startDate: new Date(2022, 2, 1),
              description: 'Análise e Desenvolvimento de Sistemas'
            },
            {
              title: 'Senai',
              startDate: new Date(2020, 8, 3),
              finishDate: new Date(2022, 4, 10),
              description: 'Técnico em Desenvolvimento Web'
            }
          ]}/>
        </Card>
      </SideBar>
      <section className='w-full'>
        <Title>Meus Projetos</Title>
      </section>
    </main>
  );
}
