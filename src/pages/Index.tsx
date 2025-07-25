import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-cinematic-black text-cinematic-white font-open">
      {/* Header */}
      <header className="fixed top-0 w-full bg-cinematic-black/90 backdrop-blur-sm z-50 py-4">
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <div className="font-cormorant text-2xl font-bold">
            Elegant <span className="text-cinematic-red italic">Videographer</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#hero" className="hover:text-cinematic-red transition-colors">Главная</a>
            <a href="#about" className="hover:text-cinematic-red transition-colors">Обо мне</a>
            <a href="#portfolio" className="hover:text-cinematic-red transition-colors">Портфолио</a>
            <a href="#services" className="hover:text-cinematic-red transition-colors">Услуги</a>
            <a href="#prices" className="hover:text-cinematic-red transition-colors">Цены</a>
            <a href="#reviews" className="hover:text-cinematic-red transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-cinematic-red transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cinematic-black via-cinematic-black/80 to-transparent z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/files/a9893e50-8157-4be1-a509-c2cf64976cee.jpg')`,
            filter: 'grayscale(0.7) brightness(0.4)'
          }}
        ></div>
        
        <div className="container mx-auto px-6 text-center z-20 animate-fade-in">
          <h1 className="font-cormorant text-6xl md:text-8xl font-bold mb-6">
            Кинематографичные
            <br />
            <span className="text-cinematic-red italic">свадебные истории</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Создаю фильмы о вашей любви с индивидуальным подходом к каждой паре. 
            Ваша история заслуживает быть рассказанной как в настоящем кино.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cinematic-red hover:bg-cinematic-red/90 text-white px-8 py-4 text-lg">
              <Icon name="Play" size={20} className="mr-2" />
              Посмотреть портфолио
            </Button>
            <Button variant="outline" size="lg" className="border-cinematic-white text-cinematic-white hover:bg-cinematic-white hover:text-cinematic-black px-8 py-4 text-lg">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-cinematic-gray text-cinematic-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="font-cormorant text-5xl font-bold mb-6">
                Обо мне
              </h2>
              <p className="text-lg mb-6 leading-relaxed">Меня зовут Вероника! Сколько себя помню - люблю снимать и сохранять момент важных в жизни событий. Моя уникальность в том, что мой рабочий инструмент - телефон. Это позволяет сделать видеосъемку свадьбы более доступной, но не менее красивой.</p>
              <p className="text-lg mb-6 leading-relaxed">
                Каждая пара уникальна, и я верю, что ваша история должна быть рассказана 
                именно так, как чувствуете её вы. Индивидуальность — основа моей работы.
              </p>
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="font-cormorant text-4xl font-bold text-cinematic-red"></div>
                  <div className="text-sm"></div>
                </div>
                <div className="text-center">
                  <div className="font-cormorant text-4xl font-bold text-cinematic-red"></div>
                  <div className="text-sm"></div>
                </div>
                <div className="text-center">
                  <div className="font-cormorant text-4xl font-bold text-cinematic-red"></div>
                  <div className="text-sm"></div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="relative">
                <img 
                  src="https://cdn.poehali.dev/files/202bf614-81ff-4d95-b664-09f89a88441f.jpg" 
                  alt="Вероника - свадебный видеограф" 
                  className="rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-cinematic-red/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500 mx-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-cinematic-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-5xl font-bold mb-6 text-cinematic-white">
              Портфолио
            </h2>
            <p className="text-xl text-cinematic-white/80 max-w-2xl mx-auto">
              Каждый фильм — это уникальная история любви, рассказанная через призму кинематографа
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: "/img/65982222-2cf8-4bea-91a7-89e146f0e38e.jpg",
                title: "Анна & Михаил",
                desc: "Романтичная история в загородном клубе"
              },
              {
                img: "/img/557f095b-d339-4969-bd57-ad6e0fac4e8a.jpg", 
                title: "Елена & Дмитрий",
                desc: "Кинематографичная съемка в стиле нуар"
              },
              {
                img: "/img/570b06d0-c6a5-4520-b088-c3112223012b.jpg",
                title: "Мария & Алексей", 
                desc: "Элегантный танец в бальном зале"
              },
              {
                img: "/img/65982222-2cf8-4bea-91a7-89e146f0e38e.jpg",
                title: "София & Николай",
                desc: "Нежная love story на природе"
              },
              {
                img: "/img/557f095b-d339-4969-bd57-ad6e0fac4e8a.jpg",
                title: "Кристина & Владимир", 
                desc: "Современная свадьба в лофт-стиле"
              },
              {
                img: "/img/570b06d0-c6a5-4520-b088-c3112223012b.jpg",
                title: "Дарья & Артем",
                desc: "Классическая церемония в соборе"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-cinematic-black border-cinematic-white/20 overflow-hidden group hover:scale-105 transition-all duration-500">
                <div className="relative">
                  <img 
                    src={item.img}
                    alt={item.title}
                    className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-cinematic-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Button size="lg" variant="outline" className="border-cinematic-white text-cinematic-white">
                      <Icon name="Play" size={24} />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-cormorant text-2xl font-bold text-cinematic-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-cinematic-white/70">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-cinematic-gray text-cinematic-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-5xl font-bold mb-6">
              Услуги
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500">
              <div className="mb-6">
                <Icon name="Video" size={48} className="mx-auto text-cinematic-red" />
              </div>
              <h3 className="font-cormorant text-2xl font-bold mb-4">Кинематограф</h3>
              <p className="text-gray-600 leading-relaxed">
                Создание свадебных фильмов в стиле художественного кино с профессиональной цветокоррекцией
              </p>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500">
              <div className="mb-6">
                <Icon name="Heart" size={48} className="mx-auto text-cinematic-red" />
              </div>
              <h3 className="font-cormorant text-2xl font-bold mb-4">Индивидуальность</h3>
              <p className="text-gray-600 leading-relaxed">
                Персональный подход к каждой паре. Ваша история уникальна, и фильм должен это отражать
              </p>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-500">
              <div className="mb-6">
                <Icon name="BookOpen" size={48} className="mx-auto text-cinematic-red" />
              </div>
              <h3 className="font-cormorant text-2xl font-bold mb-4">Storytelling</h3>
              <p className="text-gray-600 leading-relaxed">
                Построение драматургии вашего дня. Каждый момент имеет значение в общей истории любви
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20 bg-cinematic-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-5xl font-bold mb-6 text-cinematic-white">
              Цены
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-cinematic-black border-cinematic-white/20 p-8 text-center">
              <h3 className="font-cormorant text-2xl font-bold text-cinematic-white mb-4">Базовый</h3>
              <div className="text-4xl font-bold text-cinematic-red mb-6">от 80 000₽</div>
              <ul className="text-cinematic-white/80 space-y-3 mb-8">
                <li>6 часов съемки</li>
                <li>Свадебный фильм 5-7 минут</li>
                <li>Цветокоррекция</li>
                <li>Музыкальное сопровождение</li>
              </ul>
              <Button className="w-full bg-cinematic-red hover:bg-cinematic-red/90">
                Выбрать
              </Button>
            </Card>
            
            <Card className="bg-cinematic-red p-8 text-center transform scale-105">
              <h3 className="font-cormorant text-2xl font-bold text-cinematic-white mb-4">Премиум</h3>
              <div className="text-4xl font-bold text-cinematic-white mb-6">от 120 000₽</div>
              <ul className="text-cinematic-white/90 space-y-3 mb-8">
                <li>8 часов съемки</li>
                <li>Свадебный фильм 8-12 минут</li>
                <li>Love Story (предсвадебная съемка)</li>
                <li>Профессиональная цветокоррекция</li>
                <li>Индивидуальная музыка</li>
              </ul>
              <Button className="w-full bg-cinematic-white text-cinematic-red hover:bg-cinematic-white/90">
                Выбрать
              </Button>
            </Card>
            
            <Card className="bg-cinematic-black border-cinematic-white/20 p-8 text-center">
              <h3 className="font-cormorant text-2xl font-bold text-cinematic-white mb-4">VIP</h3>
              <div className="text-4xl font-bold text-cinematic-red mb-6">от 180 000₽</div>
              <ul className="text-cinematic-white/80 space-y-3 mb-8">
                <li>Полный день съемки</li>
                <li>Расширенный фильм 15-20 минут</li>
                <li>Love Story + утро невесты</li>
                <li>Киноуровень постпродакшена</li>
                <li>Индивидуальный сценарий</li>
              </ul>
              <Button className="w-full bg-cinematic-red hover:bg-cinematic-red/90">
                Выбрать
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-cinematic-gray text-cinematic-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-5xl font-bold mb-6">
              Отзывы
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Елена и Дмитрий",
                text: "Александр создал не просто видео, а настоящий фильм о нашей любви. Каждый раз, пересматривая его, мы переживаем этот день заново.",
                rating: 5
              },
              {
                name: "Анастасия и Сергей", 
                text: "Профессионализм на высочайшем уровне! Александр умеет поймать самые искренние эмоции и создать из них волшебную историю.",
                rating: 5
              },
              {
                name: "Мария и Алексей",
                text: "Спасибо за нашу сказку! Фильм получился кинематографичным и очень трогательным. Рекомендуем всем!",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic leading-relaxed">
                  "{review.text}"
                </p>
                <div className="font-cormorant font-bold text-lg">
                  {review.name}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-cinematic-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant text-5xl font-bold mb-6 text-cinematic-white">
              Контакты
            </h2>
            <p className="text-xl text-cinematic-white/80">
              Готов обсудить вашу свадьбу и создать незабываемый фильм
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-cinematic-white">
              <h3 className="font-cormorant text-3xl font-bold mb-8">Свяжитесь со мной</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" size={24} className="text-cinematic-red" />
                  <span className="text-lg">+7 (999) 123-45-67</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" size={24} className="text-cinematic-red" />
                  <span className="text-lg">video@example.com</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" size={24} className="text-cinematic-red" />
                  <span className="text-lg">Москва, Россия</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Icon name="Instagram" size={24} className="text-cinematic-red" />
                  <span className="text-lg">@wedding_videographer</span>
                </div>
              </div>
            </div>
            
            <Card className="bg-cinematic-black border-cinematic-white/20 p-8">
              <h3 className="font-cormorant text-3xl font-bold text-cinematic-white mb-6">
                Напишите мне
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Ваше имя" 
                    className="bg-cinematic-black border-cinematic-white/30 text-cinematic-white placeholder-cinematic-white/60"
                  />
                  <Input 
                    placeholder="Телефон" 
                    className="bg-cinematic-black border-cinematic-white/30 text-cinematic-white placeholder-cinematic-white/60"
                  />
                </div>
                
                <Input 
                  placeholder="Email" 
                  type="email"
                  className="bg-cinematic-black border-cinematic-white/30 text-cinematic-white placeholder-cinematic-white/60"
                />
                
                <Input 
                  placeholder="Дата свадьбы" 
                  type="date"
                  className="bg-cinematic-black border-cinematic-white/30 text-cinematic-white placeholder-cinematic-white/60"
                />
                
                <Textarea 
                  placeholder="Расскажите о вашей свадьбе..."
                  rows={4}
                  className="bg-cinematic-black border-cinematic-white/30 text-cinematic-white placeholder-cinematic-white/60"
                />
                
                <Button className="w-full bg-cinematic-red hover:bg-cinematic-red/90 text-lg py-3">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cinematic-black border-t border-cinematic-white/20 py-8">
        <div className="container mx-auto px-6 text-center text-cinematic-white/60">
          <p>&copy; 2024 Elegant Videographer. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;