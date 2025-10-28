
import { useEffect, useState } from 'react';
import './RandomPhotos.scss';

function ImageCard({ url }) {
  const [loaded, setLoaded] = useState(false);
  return <img src={url} alt="" onLoad={() => setLoaded(true)} className={`${loaded ? 'opacity-100' : 'opacity-0'} w-full h-[200px] object-cover rounded-[10px]`} />
}

function LoadMoreButton({ onClick }) {
  return <button onClick={onClick} className='load-more-btn max-w-max bg-violet-600 
  text-white px-[20px] py-[10px] border-0 shadow-xl cursor-pointer rounded-[5px]'>Load more</button>
}

function ImageGallery({ images }) {
  return <div className="mx-auto w-[85%] flex flex-wrap gap-y-[24px]">
    {images.map(({ id, download_url: url }) =>
      <ImageCard key={id} url={url} />)}
  </div>
}

function RandomPhotos() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const page = Math.ceil(images.length / 10) + 1 || 1;

  async function getImages(page, limit = 10) {
    try {
      setLoading(true);
      const res = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
      const data = await res.json();
      setImages(images => [...images, ...data]);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getImages(1, 6);
  }, []);

  return (
    <div className="random-photos my-[20px] flex flex-col gap-y-[36px] items-center">
      <ImageGallery images={images} />
      {!loading && <LoadMoreButton onClick={() => getImages(page)} />}
    </div>
  );
}

export default RandomPhotos;
