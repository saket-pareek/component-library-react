import { useEffect, useRef, useState } from 'react';
import './StickyNavbar.scss';

function StickyNavbar() {
  const [isSticky, setIsSticky] = useState(false);
  const bannerRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const bannerEl = bannerRef.current;
    const navbarEl = navbarRef.current;
    if (!bannerEl || !navbarEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      {
        root: null,
        threshold: 0,
        rootMargin: `-${navbarEl?.offsetHeight || 0}px`,
      },
    );

    bannerEl && observer.observe(bannerEl);
    return () => bannerEl && observer.disconnect();
  }, []);

  return (
    <div className='sticky-navbar'>
      <div ref={navbarRef} className={`navbar ${isSticky ? 'active' : ''}`}>
        <a href='#'>
          <img src='logo.svg' alt='logo' />
        </a>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Blog</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </div>
      <div ref={bannerRef} className='top-container'>
        <h1>Welcome to our website</h1>
      </div>
      <div className='bottom-container'>
        <p className='text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempore
          explicabo veritatis dignissimos accusantium nostrum voluptatum qui
          labore, natus mollitia voluptatem. Ipsa ducimus eos saepe expedita ex
          laboriosam optio omnis amet, qui veritatis unde aut tempora. Fuga et
          sint autem amet, modi, veniam dolorum placeat blanditiis rerum
          doloribus aliquid voluptas. Alias voluptatum id vel minima voluptates
          assumenda accusantium consectetur culpa necessitatibus sint cum
          perspiciatis laboriosam sequi praesentium, eos numquam! Eum, officia
          fugiat reprehenderit eligendi itaque similique! Harum, quod vitae
          explicabo sint ad illum expedita quisquam earum? Necessitatibus illo
          tempore sapiente commodi quae, qui quasi odit fugiat impedit mollitia
          eveniet maiores?
        </p>
        <p className='text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempore
          explicabo veritatis dignissimos accusantium nostrum voluptatum qui
          labore, natus mollitia voluptatem. Ipsa ducimus eos saepe expedita ex
          laboriosam optio omnis amet, qui veritatis unde aut tempora. Fuga et
          sint autem amet, modi, veniam dolorum placeat blanditiis rerum
          doloribus aliquid voluptas. Alias voluptatum id vel minima voluptates
          assumenda accusantium consectetur culpa necessitatibus sint cum
          perspiciatis laboriosam sequi praesentium, eos numquam! Eum, officia
          fugiat reprehenderit eligendi itaque similique! Harum, quod vitae
          explicabo sint ad illum expedita quisquam earum? Necessitatibus illo
          tempore sapiente commodi quae, qui quasi odit fugiat impedit mollitia
          eveniet maiores?
        </p>
        <p className='text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempore
          explicabo veritatis dignissimos accusantium nostrum voluptatum qui
          labore, natus mollitia voluptatem. Ipsa ducimus eos saepe expedita ex
          laboriosam optio omnis amet, qui veritatis unde aut tempora. Fuga et
          sint autem amet, modi, veniam dolorum placeat blanditiis rerum
          doloribus aliquid voluptas. Alias voluptatum id vel minima voluptates
          assumenda accusantium consectetur culpa necessitatibus sint cum
          perspiciatis laboriosam sequi praesentium, eos numquam! Eum, officia
          fugiat reprehenderit eligendi itaque similique! Harum, quod vitae
          explicabo sint ad illum expedita quisquam earum? Necessitatibus illo
          tempore sapiente commodi quae, qui quasi odit fugiat impedit mollitia
          eveniet maiores?
        </p>
        <p className='text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempore
          explicabo veritatis dignissimos accusantium nostrum voluptatum qui
          labore, natus mollitia voluptatem. Ipsa ducimus eos saepe expedita ex
          laboriosam optio omnis amet, qui veritatis unde aut tempora. Fuga et
          sint autem amet, modi, veniam dolorum placeat blanditiis rerum
          doloribus aliquid voluptas. Alias voluptatum id vel minima voluptates
          assumenda accusantium consectetur culpa necessitatibus sint cum
          perspiciatis laboriosam sequi praesentium, eos numquam! Eum, officia
          fugiat reprehenderit eligendi itaque similique! Harum, quod vitae
          explicabo sint ad illum expedita quisquam earum? Necessitatibus illo
          tempore sapiente commodi quae, qui quasi odit fugiat impedit mollitia
          eveniet maiores?
        </p>
        <p className='text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempore
          explicabo veritatis dignissimos accusantium nostrum voluptatum qui
          labore, natus mollitia voluptatem. Ipsa ducimus eos saepe expedita ex
          laboriosam optio omnis amet, qui veritatis unde aut tempora. Fuga et
          sint autem amet, modi, veniam dolorum placeat blanditiis rerum
          doloribus aliquid voluptas. Alias voluptatum id vel minima voluptates
          assumenda accusantium consectetur culpa necessitatibus sint cum
          perspiciatis laboriosam sequi praesentium, eos numquam! Eum, officia
          fugiat reprehenderit eligendi itaque similique! Harum, quod vitae
          explicabo sint ad illum expedita quisquam earum? Necessitatibus illo
          tempore sapiente commodi quae, qui quasi odit fugiat impedit mollitia
          eveniet maiores?
        </p>
      </div>
    </div>
  );
}

export default StickyNavbar;
