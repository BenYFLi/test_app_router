
import { useRouter } from 'next/router';

export default function HomePage() {
  const router =  useRouter();

  const handleButtonClick = () => {
    router.push('/about');
  };

  return (
    <main>
      <h1>Home Page</h1>
      <button onClick={handleButtonClick}>Go to About Page</button>
    </main>
  )
}
