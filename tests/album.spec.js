import chai, { expect } from 'chai';
import { getAlbum, getAlbums, getAlbumTracks, } from '../src/album';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

sinonStubPromise(sinon);

chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Album', () => {

  let stubedFetch;
  let promise;

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.returnsPromise();
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('smoke tests', () => {

    it('shouuld have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });

    it('shouuld have getAlbums method', () => {
      expect(getAlbums).to.exist;
    });

    it('shouuld have getAlbumsTracks method', () => {
      expect(getAlbumTracks).to.exist;
    });

  });

  describe('getAlbum', () => {
    it('should call fetch method', () => {
      const album = getAlbum();

      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const album = getAlbum('0EbU9uDvBoMgAcsVJqrHUm');

      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/0EbU9uDvBoMgAcsVJqrHUm');

      const album2 = getAlbum('4qdAkrGbUCkMOyOkjCYA3T');

      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4qdAkrGbUCkMOyOkjCYA3T');
    });

    it('should return the correct data from Promise', () => {
      promise.resolves({ album: 'name' });
      const album = getAlbum('4qdAkrGbUCkMOyOkjCYA3T');
      expect(album.resolveValue).to.be.eql({ album: 'name' });
    });
  });

  describe('getAlbums', () => {
    it('should call fetch method', () => {
      const album = getAlbums();

      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const albums = getAlbums(['0EbU9uDvBoMgAcsVJqrHUm', '4qdAkrGbUCkMOyOkjCYA3T']);

      expect(stubedFetch).to.have.been
        .calledWith('https://api.spotify.com/v1/albums/?ids=0EbU9uDvBoMgAcsVJqrHUm,4qdAkrGbUCkMOyOkjCYA3T');
    });

    it('should return the correct data from Promise', () => {
      promise.resolves({ album: 'name' });

      const albums = getAlbums(['0EbU9uDvBoMgAcsVJqrHUm', '4qdAkrGbUCkMOyOkjCYA3T']);

      expect(albums.resolveValue).to.be.eql({ album: 'name' });
    });
  });

  describe('getAlbumTracks', () => {
    it('should call fetch method', () => {
      const album = getAlbumTracks();

      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const album = getAlbumTracks('0EbU9uDvBoMgAcsVJqrHUm');

      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/0EbU9uDvBoMgAcsVJqrHUm/tracks');
    });

    it('should return the correct data from Promise', () => {
      promise.resolves({ album: 'name' });
      const album = getAlbumTracks('4qdAkrGbUCkMOyOkjCYA3T');
      expect(album.resolveValue).to.be.eql({ album: 'name' });
    });
  });
});
