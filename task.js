const musicCollection = {
    albums: [
      { title: "Альбом1", artist: "Исполнитель1", year: 1973 },
      { title: "Альбом2", artist: "Исполнитель2", year: 1982 },
      { title: "Альбом3 Black", artist: "Исполнитель3", year: 1980 },
      { title: "Альбом4", artist: "Исполнитель4", year: 1977 },
      { title: "Альбом5", artist: "Исполнитель5", year: 1969 }
    ],
  
    [Symbol.iterator]() {
      let index = 0;
      const albums = this.albums;
  
      return {
        next() {
          if (index < albums.length) {
            return { value: albums[index++], done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  // Используем цикл for...of для перебора альбомов
  for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
  }
  