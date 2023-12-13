import React, { useState } from 'react';
import { Checkbox, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import textAdImage from '../Images/text-ads.jpg';
import mediaAdImage from '../Images/media-ads.jpg';
import { Link } from 'react-router-dom';

const CreateAdPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (cardName) => {
    setSelectedCard((prevSelected) => (prevSelected === cardName ? null : cardName));
  };

  const handleNext = () => {
    if (selectedCard === 'Card1') {
      return <Link to="/text-ad-form" />;
    } else if (selectedCard === 'Card2') {
      return <Link to="/media-ad-form" />;
    }
  };


  return (
    <div style={{ marginTop: '100px', marginLeft: '20px', marginRight: '20px' }}>
      <Card style={{ width: '100%', height: '80vh', border: '1px' }}>
        <Typography variant="h6" style={{ margin: '10px 10px' }}>Create Ads</Typography>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          {/* Card 1 */}
          <Card style={{ width: '20%', marginRight: '40px' }} onClick={() => handleCardSelect('Card1')} >
            <CardContent>
              <Checkbox checked={selectedCard === 'Card1'} />
              <CardMedia component="img" width="200" height="300" image={textAdImage} alt="Text Ad" />
            </CardContent>
            <div style={{ backgroundColor: '#f0f0f0', padding: '5px', textAlign: 'center' }}>
              <Typography style={{ color: 'grey' }}>Create</Typography>
              <Typography variant="h6">Text Ad</Typography>
            </div>
          </Card>

          {/* Card 2 */}
          <Card style={{ width: '20%' }} onClick={() => handleCardSelect('Card2')}>
            <CardContent>
              <Checkbox checked={selectedCard === 'Card2'} />
              <CardMedia component="img" width="200" height="300" image={mediaAdImage} alt="Text Ad" />
            </CardContent>
            <div style={{ backgroundColor: '#f0f0f0', padding: '5px', textAlign: 'center' }}>
              <Typography style={{ color: 'grey' }}>Create</Typography>
              <Typography variant="h6">Media Ad</Typography>
            </div>
          </Card>
        </div>

        <Link to={selectedCard === 'Card1' ? '/text-ad-form' : (selectedCard === 'Card2' ? '/media-ad-form' : '')}>
          <Button variant="contained" color="primary" style={{ float: 'right', marginRight: '10px', marginTop: '20px' }} disabled={!selectedCard} >
            {handleNext()}
            Next
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default CreateAdPage;




