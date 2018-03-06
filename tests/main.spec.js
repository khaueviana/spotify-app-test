import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/main';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

describe('Spotify Wrapper', () => {
  describe('smoke tests', () => {
    it('should exist the search method', () => {
      expect(search).to.exist;
    });
    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });
    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });
    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });
    it('should exist the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('Generic Search', () => {

    let fetchedStub;
    let promise;

    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      promise = fetchedStub.returnsPromise();
    });

    afterEach(() => {
      fetchedStub.restore();
    })

    it('should call fetch function', () => {
      const artists = search();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct URL to fetch', () => {

      context('passing to one type', () => {
        const artists = search('Incubus', 'artist');

        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

        const albums = search('Incubus', 'album');

        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
      });

      context('passing more than one type', () => {
        const artistsAndAlbums = search('Incubus', ['artist', 'album']);

        expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album');
      });

    });

    it('should return the JSON Data from the Promise', () => {
      promise.resolves({ body: 'json' });
      const artists = search('Incubus', 'artists');

      expect(artists.resolveValue).to.be.eql({ body: 'json' });
    });
  });

  describe('Search Artists', () => {

    let fetchedStub;
    let promise;

    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      promise = fetchedStub.returnsPromise();
    });

    afterEach(() => {
      fetchedStub.restore();
    })

    it('should call fetch function', () => {
      const artist = searchArtists('Incubus');

      expect(fetchedStub).to.have.been.calledOnce;
    })

    it('should call fetch with the correct URL', () => {
      const artists = searchArtists('Incubus');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');
    })
  });

  describe('Search Albums', () => {

    let fetchedStub;
    let promise;

    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      promise = fetchedStub.returnsPromise();
    });

    afterEach(() => {
      fetchedStub.restore();
    })

    it('should call fetch function', () => {
      const albums = searchAlbums('Incubus');

      expect(fetchedStub).to.have.been.calledOnce;
    })

    it('should call fetch with the correct URL', () => {
      const albums = searchAlbums('Incubus');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
    })
  });

  describe('Search Tracks', () => {

    let fetchedStub;
    let promise;

    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      promise = fetchedStub.returnsPromise();
    });

    afterEach(() => {
      fetchedStub.restore();
    })

    it('should call fetch function', () => {
      const tracks = searchTracks('Incubus');

      expect(fetchedStub).to.have.been.calledOnce;
    })

    it('should call fetch with the correct URL', () => {
      const tracks = searchTracks('Incubus');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');
    })
  });

  describe('Search Playlist', () => {

    let fetchedStub;
    let promise;

    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      promise = fetchedStub.returnsPromise();
    });

    afterEach(() => {
      fetchedStub.restore();
    })

    it('should call fetch function', () => {
      const tracks = searchPlaylists('Incubus');

      expect(fetchedStub).to.have.been.calledOnce;
    })

    it('should call fetch with the correct URL', () => {
      const tracks = searchPlaylists('Incubus');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');
    })
  });
});
