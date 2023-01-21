import React,{useState,useEffect} from 'react';
import HackerStories from './HackerStories';
const HackerIds = () => {

  const [hackerIdList,setHackerIdList] = useState([]);

  const fetchHackerIDs = async () => {
    const fetchedIdData = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
    const fetchedIds = await fetchedIdData.json();
    setHackerIdList(fetchedIds);
    // console.log(fetchedIds);
  }

  useEffect(() => {
    fetchHackerIDs();
  },[])

  return (
    <div>
      <h2>HackerId Component</h2>
       {hackerIdList.map((id) => (
      <HackerStories id={id}>{id}</HackerStories>
      ))} 
    </div>
  )
}

export default HackerIds;