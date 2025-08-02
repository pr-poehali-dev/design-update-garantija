import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">ТехСервис</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О компании</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:block">Заказать звонок</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-primary/5 to-blue-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Гарантийное и постгарантийное 
                <span className="text-primary"> обслуживание</span> оборудования
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Профессиональный ремонт и техническое обслуживание промышленного оборудования. 
                Быстро, качественно, с гарантией результата.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  Получить консультацию
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Icon name="FileText" className="mr-2 h-5 w-5" />
                  Прайс-лист
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/2841dc0a-1fba-45e1-9c2e-0e8fed72c14f.jpg" 
                alt="Профессиональное обслуживание оборудования"
                className="w-full h-96 object-cover rounded-2xl shadow-xl mb-6"
              />
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-gray-600">Единиц оборудования</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-gray-600">Лет опыта</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Поддержка</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">98%</div>
                    <div className="text-sm text-gray-600">Успешных ремонтов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по техническому обслуживанию и ремонту промышленного оборудования
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Settings" className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Гарантийное обслуживание</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  Полное техническое обслуживание в рамках гарантийных обязательств. 
                  Диагностика, профилактика и устранение неисправностей.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Wrench" className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Постгарантийный ремонт</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  Качественный ремонт оборудования после истечения гарантийного срока. 
                  Замена деталей, модернизация, восстановление работоспособности.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Headphones" className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Техническая поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  Круглосуточная поддержка пользователей, консультации по эксплуатации, 
                  удаленная диагностика и решение технических вопросов.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">О компании</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Более 15 лет мы специализируемся на техническом обслуживании промышленного оборудования. 
                Наша команда состоит из высококвалифицированных инженеров и техников с многолетним опытом работы.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Мы обслуживаем оборудование ведущих мировых производителей и гарантируем быстрое 
                восстановление работоспособности вашего производства.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Shield" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Надежность</div>
                    <div className="text-sm text-gray-600">Проверенные решения</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Clock" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Скорость</div>
                    <div className="text-sm text-gray-600">Быстрое реагирование</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Users" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Опыт</div>
                    <div className="text-sm text-gray-600">Команда профессионалов</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Award" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Качество</div>
                    <div className="text-sm text-gray-600">Высокие стандарты</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/img/2b66b14c-6482-45a5-b3e9-8fef1f7adc06.jpg" 
                alt="Офис компании ТехСервис"
                className="w-full h-64 object-cover rounded-2xl shadow-xl mb-6"
              />
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Почему выбирают нас</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                      <Icon name="Check" className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-gray-600">Сертифицированные специалисты</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                      <Icon name="Check" className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-gray-600">Оригинальные запчасти и комплектующие</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                      <Icon name="Check" className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-gray-600">Гарантия на выполненные работы</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                      <Icon name="Check" className="h-4 w-4 text-white" />
                    </div>
                    <div className="text-gray-600">Круглосуточная техническая поддержка</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Готовы помочь решить любые вопросы по обслуживанию вашего оборудования
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Phone" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Телефон</h3>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                    <p className="text-gray-600">+7 (800) 123-45-67 (бесплатно)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Mail" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">info@techservice.ru</p>
                    <p className="text-gray-600">support@techservice.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Адрес</h3>
                    <p className="text-gray-600">г. Москва, ул. Промышленная, д. 123</p>
                    <p className="text-gray-600">Пн-Пт: 9:00-18:00, Сб-Вс: 10:00-16:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Отправить заявку</CardTitle>
                <CardDescription>
                  Оставьте свои контакты, и мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                  <Input placeholder="your@email.ru" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Сообщение</label>
                  <Textarea 
                    placeholder="Опишите ваш вопрос или задачу..." 
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" className="mr-2 h-5 w-5" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">ТехСервис</div>
              <p className="text-gray-400 mb-4">
                Профессиональное обслуживание промышленного оборудования
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <Icon name="Phone" className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <Icon name="Mail" className="h-5 w-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Гарантийное обслуживание</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Постгарантийный ремонт</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Техническая поддержка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Диагностика</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Наша команда</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сертификаты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@techservice.ru</li>
                <li>г. Москва, ул. Промышленная, д. 123</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ТехСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;