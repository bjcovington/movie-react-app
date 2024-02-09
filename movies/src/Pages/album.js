import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Card, CardContent, CardMedia, Grid, Button, Link, Dialog, DialogContent, DialogTitle, DialogActions } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import InfoIcon from '@mui/icons-material/Info';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const movies = [
  {
    title: 'Inception',
    director: 'Christopher Nolan',
    image: 'https://th.bing.com/th/id/OIP.HhFEom4Eu18Hl5jtpTuK3QHaEK?rs=1&pid=ImgDetMain',
    description: 'A mind-bending science fiction film directed by Christopher Nolan. Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state.',
    trailerLink: 'https://www.youtube.com/embed/8hP9D6kZseM' // Example trailer link (replace with actual YouTube link)
  },
  {
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    image: 'https://th.bing.com/th/id/R.af914ee4cc48b140b420ecfec8559304?rik=B26ZPiEMW6BArg&pid=ImgRaw&r=0',
    description: 'A gripping drama directed by Frank Darabont. Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    trailerLink: 'https://www.youtube.com/embed/NmzuHjWmXOc' // Example trailer link (replace with actual YouTube link)
  },
  {
    title: 'The Godfather',
    director: 'Francis Ford Coppola',
    image: 'https://th.bing.com/th/id/R.a20d8a7ad5d071463ccd16cb6893efe4?rik=epcnc4OSL3o2QA&pid=ImgRaw&r=0',
    description: 'An epic crime film directed by Francis Ford Coppola. The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    trailerLink: 'https://www.youtube.com/embed/sY1S34973zA' // Example trailer link (replace with actual YouTube link)
  },
  {
    title: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    image: 'https://th.bing.com/th/id/OIP.BCGMQEOL4i1V8WJpUr4dWgHaEK?rs=1&pid=ImgDetMain',
    description: 'A nonlinear crime film directed by Quentin Tarantino. The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    trailerLink: 'https://www.youtube.com/embed/s7EdQ4FqbhY' // Example trailer link (replace with actual YouTube link)
  },
  {
    title: 'The Dark Knight',
    director: 'Christopher Nolan',
    image: 'https://www.hdwallpaper.nu/wp-content/uploads/2015/10/The_Dark_Knight_wallpaper_021.jpg',
    description: 'A superhero film directed by Christopher Nolan. When the menace known as The Joker emerges, Batman must confront him and save the city he is sworn to protect.',
    trailerLink: 'https://www.youtube.com/embed/EXeTwQWrcwY' // Example trailer link (replace with actual YouTube link)
  },
  {
    title: 'Schindler\'s List',
    director: 'Steven Spielberg',
    image: 'https://th.bing.com/th/id/OIP.EJJnGXjVd1yHa3RtPpxKCAHaEK?rs=1&pid=ImgDetMain',
    description: 'A historical drama directed by Steven Spielberg. In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
    trailerLink: 'https://www.youtube.com/embed/JdRGC-w9syA' // Example trailer link (replace with actual YouTube link)
  },
  {
    title: 'Forrest Gump',
    director: 'Robert Zemeckis',
    image: 'https://th.bing.com/th/id/OIP.hr3fUmLHbjvDAxrNPu65kQHaEK?rs=1&pid=ImgDetMain',
    description: 'A comedy-drama film directed by Robert Zemeckis. The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.',
    trailerLink: 'https://www.youtube.com/embed/bLvqoHBptjg' // Example trailer link (replace with actual YouTube link)
  },
  {
    title: 'The Matrix',
    director: 'The Wachowskis',
    image: 'https://th.bing.com/th/id/R.6a474dbad6ccc20a80df843f9ec43e17?rik=4C0D0xQ7OhNaPw&pid=ImgRaw&r=0',
    description: 'A science fiction action film directed by The Wachowskis. A computer hacker learns about the true nature of his reality and his role in the war against its controllers.',
    trailerLink: 'https://www.youtube.com/embed/vKQi3bBA1y8' // Example trailer link (replace with actual YouTube link)
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    director: 'Peter Jackson',
    image: 'https://th.bing.com/th/id/R.ee50134affefce11cd1352eeabf3dc25?rik=lLfkw5HIVgbEgw&pid=ImgRaw&r=0',
    description: 'A fantasy film directed by Peter Jackson. A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
    trailerLink: 'https://www.youtube.com/embed/V75dMMIW2B4' // Example trailer link (replace with actual YouTube link)
  },
];

const HeroComponent = () => (
  <Card style={{ position: 'relative', height: '60vh', overflow: 'hidden' }}>
    <CardMedia
      component="img"
      alt="Movie Hero Image"
      height="100%"
      image="https://th.bing.com/th/id/R.f7cfba11eb2ff7a6d9da1fe480dc967c?rik=XXwJ594Mt%2fW5fw&riu=http%3a%2f%2fs3.amazonaws.com%2fdigitaltrends-uploads-prod%2f2015%2f07%2fMovie-theater-screen.jpg&ehk=D0Nn%2bVGAFOgzoHE0aV4txz0wHTpIF3yDMusWqztEkHE%3d&risl=&pid=ImgRaw&r=0"
      style={{ objectFit: 'cover' }}
    />
    <CardContent style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
      <Typography variant="h3" style={{ marginBottom: 16 }}>Welcome to the Movie Album</Typography>
      <Typography variant="body1">
        Explore a collection of your favorite movies. Lights, Camera, Action!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: 20 }}
        onClick={() => scrollToGridSection()}
      >
        Learn More
      </Button>
    </CardContent>
  </Card>
);

const scrollToGridSection = () => {
  const gridSection = document.getElementById('grid-section');
  if (gridSection) {
    gridSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Footer = () => (
  <div style={{ marginTop: '20px', textAlign: 'center' }}>
    <Typography variant="body2" color="textSecondary">
      © {new Date().getFullYear()} Movie Album
    </Typography>
    <Link href="#" color="textSecondary" style={{ marginLeft: '8px' }}>
      Privacy Policy
    </Link>
  </div>
);

const DetailsDialog = ({ open, handleClose, movie }) => (
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle>{movie?.title} Details</DialogTitle>
    <DialogContent>
      <Typography>{movie?.description}</Typography>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

const WatchTrailerDialog = ({ open, handleClose, movie }) => (
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle>{`Watch Trailer - ${movie?.title}`}</DialogTitle>
    <DialogContent>
      <iframe
        width="560"
        height="315"
        src={movie?.trailerLink}
        title={`Trailer - ${movie?.title}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

export default function Album() {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [watchTrailerOpen, setWatchTrailerOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleDetailsClick = (movie) => {
    setDetailsOpen(true);
    setSelectedMovie(movie);
  };

  const handleWatchTrailerClick = (movie) => {
    setWatchTrailerOpen(true);
    setSelectedMovie(movie);
  };

  const handleCloseDetails = () => {
    setDetailsOpen(false);
    setSelectedMovie(null);
  };

  const handleCloseWatchTrailer = () => {
    setWatchTrailerOpen(false);
    setSelectedMovie(null);
  };

  return (
    <div>
      <AppBar position="static" style={{ background: '#2C3E50', color: 'white' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MovieIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1, fontFamily: 'cursive', fontWeight: 'bold', fontSize: '1.5rem' }}>
            Movie Album
          </Typography>
        </Toolbar>
      </AppBar>
      <HeroComponent />
      <div id="grid-section" style={{ margin: '20px' }}>
        <Grid container spacing={2}>
          {movies.map((movie, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardMedia
                  component="img"
                  alt={movie.title}
                  height="140"
                  image={movie.image}
                />
                <CardContent>
                  <Typography variant="h6">{movie.title}</Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    Director: {movie.director}
                  </Typography>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<InfoIcon />}  // Updated icon for Details
                      onClick={() => handleDetailsClick(movie)}
                    >
                      Details
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<PlayArrowIcon />}  // Updated icon for Watch Trailer
                      onClick={() => handleWatchTrailerClick(movie)}
                    >
                      Watch Trailer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer />
      <DetailsDialog open={detailsOpen} handleClose={handleCloseDetails} movie={selectedMovie} />
      <WatchTrailerDialog open={watchTrailerOpen} handleClose={handleCloseWatchTrailer} movie={selectedMovie} />
    </div>
  );
}
