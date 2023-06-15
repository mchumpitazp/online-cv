import React from "react";
import { Row, Col } from 'reactstrap';

function Background (props) {
    if (props.language === 'en') {
        var titles = ['Background', 'Education', 'Experience'];
        var months = ['Dec', 'Present', 'Sep', 'Nov'];
        var utec = 'Studied in Peru at University of Technology and Engineering. Graduated as Electronics Engineer specialized in Digital and Computational Systems.';
        var harvard = 'Certified by Harvard University in Web Programming with Python and JavaScript, including six projects.';
        var hkust = 'Certified by The Hong Kong University of Science and Technology in Full-Stack Web Development with React.';
        var ibm = 'Certified by IBM in Python for Data Science using Jupyter and Pandas library.';
        var developer = ['Freelancer Web Developer', 'Management and development of interactive, responsive, scalable and high performance websites for companies around the world. Expertise in user-interfaces and servers with database integration.'];
        var engineer = ['Engineer', 'Collaborating over 1 year for a tech team, developing innovative and scalable hardware and software solutions for mid and large projects in The Water Research and Technology Center in Peru.'];
    } else {
        titles = ['Основа', 'Образование', 'Опыт'];
        months = ['Дек', 'Настоящее время','Сен', 'Ноя'];
        utec = 'Учился в Перу в Университете Технологии и Инженерного дела. Дипломированный инженер-электронщик, специализирующийся на цифровых и вычислительных системах.';
        harvard = 'Сертифицирован Гарвардским университетом по веб-программированию на Python и JavaScript, включая шесть проектов.';
        hkust = 'Сертифицирован Гонконгским университетом науки и технологий в области полнофункциональной веб-разработки с использованием React.';
        ibm = 'Сертифицирован IBM по Python для работы с данными с использованием библиотеки Jupyter и Pandas.';
        developer = ['Веб-разработчик-фрилансер', 'Управление и разработка интерактивных, адаптивных, масштабируемых и высокопроизводительных веб-сайтов для компаний по всему миру. Опыт работы с пользовательскими интерфейсами и серверами с интеграцией баз данных.'];
        engineer = ['Инженер', 'Более 1 года сотрудничал с технической командой, разрабатывая инновационные и масштабируемые аппаратные и программные решения для средних и крупных проектов в Центре Водных Исследований и Технологий в Перу.'];
    }

    return (
        <section id="background" className="mx-auto">
            <span id="background-title" data-aos="fade">{titles[0]}</span>

            <Row xs={1} md={2}>
                <Col xs={12} md={5}></Col>
                <Col xs={12} md={7}>
                    <div id="background__education" className="my-5">
                        <span className="background-subtitle" data-aos="fade">{titles[1]}</span>

                        <div id="background__education-items" className="d-flex flex-wrap gap-5">
                            <div className="background__education-item mt-5" data-aos="fade">
                                <span><small>2015 &mdash; 2021</small></span>
                                <br/>
                                <span>{utec}</span>
                            </div>
                            <div className="background__education-item mt-5" data-aos="fade">
                                <span><small>2022</small></span>
                                <br/>
                                <span>{harvard}</span>
                            </div>
                            <div className="background__education-item" data-aos="fade">
                                <span><small>2022</small></span>
                                <br/>
                                <span>{hkust}</span>
                            </div>
                            <div className="background__education-item" data-aos="fade">
                                <span><small>2019</small></span>
                                <br/>
                                <span>{ibm}</span>
                            </div>
                        </div>
                    </div>
                    <div id="background__experience">
                        <span className="background-subtitle" data-aos="fade">{titles[2]}</span>

                        <div id="background__experience-items" className="d-flex flex-wrap gap-4">
                            <div className="background__experience-item mt-5" data-aos="fade">
                                <span><small>{months[0]} 2022 &mdash; {months[1]}</small></span>
                                <br/>
                                <span>{developer[0]} &mdash; {developer[1]}</span>
                            </div>
                            <div className="background__experience-item mt-5" data-aos="fade">
                                <span><small>{months[2]} 2020 &mdash; {months[3]} 2021</small></span>
                                <br/>
                                <span>R&D {engineer[0]} &mdash; {engineer[1]}</span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    );
}

export default Background;