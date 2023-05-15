import { useState, useEffect,} from 'react';
import { useParams } from 'react-router-dom';
import { Box  } from '@mui/material';

import { Videos ,ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromApi';

const ChannelDetail = () => {
  const [ channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  

  useEffect(() =>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items));

    
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
        
         background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(114,9,121,0.2665441176470589) 35%, rgba(81,68,160,1) 54%, rgba(46,131,201,1) 74%, rgba(16,130,159,0.3225665266106442) 83%, rgba(0,212,255,1) 100%',
          zIndex: 10,
          height: '300px'
        }}
        />
        <ChannelCard channelDetail={channelDetail}
        marginTop="-110px" />
      </Box>
      <Box display="flex" p='2'>
        <Box sx={{mr: {sm: '100px'}}} />
          <videos videos ={videos} />


        </Box>


      </Box>
    
  )
}

export default ChannelDetail