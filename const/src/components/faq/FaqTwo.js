import React from 'react';

export default class FaqTwo extends React.Component {
    componentDidMount() {

        const $ = window.$;
        
        if ($('.accordion-box').length) {
            $(".accordion-box").on('click', '.acc-btn', function () {
        
              var outerBox = $(this).parents('.accordion-box');
              var target = $(this).parents('.accordion');
        
              if ($(this).hasClass('active') !== true) {
                $(outerBox).find('.accordion .acc-btn').removeClass('active');
              }
        
              if ($(this).next('.acc-content').is(':visible')) {
                return false;
              } else {
                $(this).addClass('active');
                $(outerBox).children('.accordion').removeClass('active-block');
                $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
                target.addClass('active-block');
                $(this).next('.acc-content').slideDown(300);
              }
            });
        }
          
    }
    render(){
        return (
            <>
                <section className="faq-one faq-one--faq">
                    <div className="container">
                        <div className="row">
                            {/* Start Faq One Accordion */}
                            <div className="col-xl-12">
                                <div className="faq-one__accordion">
                                    <ul className="accordion-box">
                                        <li className="accordion block">
                                            <div className="acc-btn">
                                                <div className="icon-outer">
                                                    <i className="icon-plus-sign"></i>
                                                </div>
                                                <h3>1. Hizmetinizde neler var?</h3>
                                            </div>
                                            <div className="acc-content">
                                                <div className="inner">
                                                    <p>Çoğu pasaj çeşitli değişiklikler görmüştür; içine mizah eklenmiş veya rastgele kelimeler eklenmiştir, inanılır.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="accordion block active-block">
                                            <div className="acc-btn active">
                                                <div className="icon-outer">
                                                    <i className="icon-plus-sign"></i>
                                                </div>
                                                <h3>2. Ödeme koşulları alabilir miyim?</h3>
                                            </div>
                                            <div className="acc-content current">
                                                <div className="inner">
                                                    <p>Çoğu pasaj çeşitli değişiklikler görmüştür; içine mizah eklenmiş veya rastgele kelimeler eklenmiştir, inanılır.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="accordion block mb0">
                                            <div className="acc-btn">
                                                <div className="icon-outer">
                                                    <i className="icon-plus-sign"></i>
                                                </div>
                                                <h3>3. Sürdürülebilir büyüme yaratıyoruz.</h3>
                                            </div>
                                            <div className="acc-content">
                                                <div className="inner">
                                                    <p>Çoğu pasaj çeşitli değişiklikler görmüştür; içine mizah eklenmiş veya rastgele kelimeler eklenmiştir, inanılır.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="accordion block mb0">
                                            <div className="acc-btn">
                                                <div className="icon-outer">
                                                    <i className="icon-plus-sign"></i>
                                                </div>
                                                <h3>4. Neden en iyi şirketiz?</h3>
                                            </div>
                                            <div className="acc-content">
                                                <div className="inner">
                                                    <p>Çoğu pasaj çeşitli değişiklikler görmüştür; içine mizah eklenmiş veya rastgele kelimeler eklenmiştir, inanılır.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="accordion block mb0">
                                            <div className="acc-btn">
                                                <div className="icon-outer">
                                                    <i className="icon-plus-sign"></i>
                                                </div>
                                                <h3>5. Şablon süreci nasıl işler?</h3>
                                            </div>
                                            <div className="acc-content">
                                                <div className="inner">
                                                    <p>Çoğu pasaj çeşitli değişiklikler görmüştür; içine mizah eklenmiş veya rastgele kelimeler eklenmiştir, inanılır.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="accordion block mb0">
                                            <div className="acc-btn">
                                                <div className="icon-outer">
                                                    <i className="icon-plus-sign"></i>
                                                </div>
                                                <h3>6. Şirketin misyonu ve vizyonu nedir?</h3>
                                            </div>
                                            <div className="acc-content">
                                                <div className="inner">
                                                    <p>Çoğu pasaj çeşitli değişiklikler görmüştür; içine mizah eklenmiş veya rastgele kelimeler eklenmiştir, inanılır.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="accordion block mb0">
                                            <div className="acc-btn">
                                                <div className="icon-outer">
                                                    <i className="icon-plus-sign"></i>
                                                </div>
                                                <h3>7. En güvenilir performans nedir?</h3>
                                            </div>
                                            <div className="acc-content">
                                                <div className="inner">
                                                    <p>Çoğu pasaj çeşitli değişiklikler görmüştür; içine mizah eklenmiş veya rastgele kelimeler eklenmiştir, inanılır.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="accordion block mb0">
                                            <div className="acc-btn">
                                                <div className="icon-outer">
                                                    <i className="icon-plus-sign"></i>
                                                </div>
                                                <h3>8. Tema hakkında daha fazla bilgiye ihtiyacım var.</h3>
                                            </div>
                                            <div className="acc-content">
                                                <div className="inner">
                                                    <p>Çoğu pasaj çeşitli değişiklikler görmüştür; içine mizah eklenmiş veya rastgele kelimeler eklenmiştir, inanılır.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* End Faq One Accordion */}

                        </div>
                    </div>
                </section>
            </>
        )
    }
}
