import React,{useState,useEffect} from 'react';
const HackerStories = ({ id }) => {
 
  const [by,setBy] = useState('');
  const [descendants,setDescendants] = useState(0);
  const [storyId,setStoryId] = useState(0);
  const [kids,setKids] = useState([])
  const [score,setScore] = useState(0);
  const [time,setTime] = useState(0);
  const [title,setTitle] = useState('');
  const [type,setType] = useState('');
  const [url,setUrl] = useState('');
 
  useEffect(() => {
    const fetchHackerStories = async () => {

      const fetchedStories = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
      const storyData = await fetchedStories.json();
 
      setBy(storyData.by);
      setDescendants(storyData.descendants);
      setStoryId(storyData.id);
      setKids(storyData.kids);
      setScore(storyData.score);
      setTime(storyData.time);
      setTitle(storyData.title);
      setType(storyData.type);
      setUrl(storyData.url);
    }
 
    fetchHackerStories();
  },[])
 
  return (
    <div>
    {by && <h3>BY : {by}</h3>}
    {descendants && <h3>Descendant : {descendants}</h3>}
    {storyId && <h3>StoryID : {storyId}</h3>}
    {kids &&
    <>
    <h3>Kids</h3>
    {kids.map((kidID) => (
    <li key={kidID}>{kidID}</li>
    ))}
    </>
    }
    {score && <h3>Score : {score}</h3>}
    {time && <h3>Time : {time}</h3>}
    {title && <h3>Title : {title}</h3>}
    {type && <h3>Type : {type}</h3>}
    {url && <h3>URL : {url}</h3>}
    </div>
    )
    }
    
    export default HackerStories;
    
    
    
    