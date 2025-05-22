import { Card } from 'react-bootstrap';
import './Resources.scss';
import { useState } from 'react';

export default function Resources() {
  const [imageErrors, setImageErrors] = useState({});

  const resources = [
    {
      emoji: '🌟',
      title: 'BabyCenter',
      description: 'Comprehensive advice on pregnancy, baby development, and parenting tips.',
      url: 'https://www.babycenter.com',
      image: 'https://assets.babycenter.com/ims/2022/06/d_hm_carousel_2ndSlide.png', // Replace with actual logo/screenshot
    },
    {
      emoji: '👶',
      title: 'What to Expect',
      description: 'Guides on pregnancy, baby milestones, and parenting from newborn to toddler.',
      url: 'https://www.whattoexpect.com',
      image: '//images.agoramedia.com/wte3.0/gcms/Sleeping-Through-the-Night-article.jpg', // Replace with actual logo/screenshot
    },
    {
      emoji: '🍼',
      title: 'The Bump',
      description: 'Resources for pregnancy, baby care, and family planning with expert advice.',
      url: 'https://www.thebump.com',
      image: 'https://s3.amazonaws.com/static.thebump.com/tb-web-assets/homepage/journey-starts-parenting.png', // Replace with actual logo/screenshot
    },
    {
      emoji: '📚',
      title: 'Parenting.com',
      description: 'Articles on child development, health, and fun family activities.',
      url: 'https://www.parenting.com',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Parents_and_their_baby.jpg/800px-Parents_and_their_baby.jpg', // No image to demonstrate static text
    },
    // {
    //   emoji: '🩺',
    //   title: 'KidsHealth',
    //   description: 'Trusted medical and developmental information for parents and kids.',
    //   url: 'https://kidshealth.org',
    //   image: 'https://kidshealth.org/favicon.ico', // Replace with actual logo/screenshot
    // },
  ];

  const handleImageError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div className="resources-card mt-4 p-4">
      <h3 className="resources-title">
        <span className="emoji">🔗</span> Parenting Resources
      </h3>
      <div className="resources-grid">
        {resources.map((resource, index) => {
          const hasImage = resource.image && !imageErrors[index];

          return (
            <div key={index} className={`resource-item ${hasImage ? 'has-image' : 'no-image'}`}>
              {hasImage ? (
                <>
                  <img
                    src={resource.image}
                    alt={`${resource.title} logo`}
                    className="resource-image"
                    onError={() => handleImageError(index)}
                  />
                  <div className="resource-content">
                    <div className="emoji">{resource.emoji}</div>
                    <div>
                      <h5>{resource.title}</h5>
                      <p>{resource.description}</p>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-primary"
                        aria-label={`Visit ${resource.title} website`}
                      >
                        Visit Site
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <div className="resource-content no-image-content">
                  <div className="emoji">{resource.emoji}</div>
                  <div>
                    <h5>{resource.title}</h5>
                    <p>{resource.description}</p>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-primary"
                      aria-label={`Visit ${resource.title} website`}
                    >
                      Visit Site
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
