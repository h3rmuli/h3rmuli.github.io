import ContentArea from './ContentArea';

import iconAnimation from '../assets/icon-animation.svg';
import iconDesign from '../assets/icon-design.svg';
import iconPhotography from '../assets/icon-photography.svg';
import iconCrypto from '../assets/icon-crypto.svg';
import iconBusiness from '../assets/icon-business.svg';

const loremIpsum = [
  {
    icon: iconAnimation,
    title: 'Animation',
    content:
      'Learn the latest animation techniques to create stunning motion design and captivate your audience.',
  },
  {
    icon: iconDesign,
    title: 'Design',
    content:
      'Create beautiful, usable interfaces to help shape the future of how the web looks.',
  },
  {
    icon: iconPhotography,
    title: 'Photography',
    content:
      'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.',
  },
  {
    icon: iconCrypto,
    title: 'Crypto',
    content:
      'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.',
  },
  {
    icon: iconBusiness,
    title: 'Business',
    content:
      'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.',
  },
];

export default function Content() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 md:mt-32">
      <div className="-mt-3 mb-9 mx-3 p-5 bg-gradient-to-t from-cgrpink to-cgrorange text-white rounded-lg font-bold">
        <p>Check out our most popular courses!</p>
      </div>
      {loremIpsum.map((item) => (
        <ContentArea
          image={item.icon}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
}
