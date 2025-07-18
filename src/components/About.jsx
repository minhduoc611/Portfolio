import portfolio1 from '../assets/portfolio1.jpg';
import { useTranslation } from 'react-i18next';

const About = () => {
  // Hook i18next để lấy translation
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute w-80 h-80 rounded-full bg-secondary opacity-5 blur-3xl -bottom-40 -left-40 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-white mb-12 text-center reveal">
          {t('aboutSection.title')} <span className="text-secondary">{t('aboutSection.titleHighlight')}</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-text mb-4 reveal">
              {t('aboutSection.description')}
            </p>
            
            {/* Download CV Button */}
            <div className="reveal animate-fadeIn delay-300">
              <a 
                href="https://drive.google.com/drive/folders/13zQQ30PjDrTQldtrwaIORcGTZ_5j6nHQ?hl=vi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center border-2 border-secondary text-secondary py-3 px-8 rounded-full font-medium hover:bg-secondary hover:text-white transition-all duration-300 shadow-lg hover:shadow-secondary/50"
              >
                <span>{t('aboutSection.viewCV')}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative reveal">
              <div className="w-64 h-64 bg-gradient-to-br from-secondary to-blue-700 rounded-lg p-1">
                <div className="w-full h-full bg-primary rounded-lg overflow-hidden">
                  <img 
                    src={portfolio1} 
                    alt="Minh Duoc" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute w-64 h-64 border-2 border-secondary rounded-lg -right-5 -bottom-5 z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;