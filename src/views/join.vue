<template>
  <div id="a">
    <div id="b">
      <p>
        <b>一切用心都是為了安全</b>
      </p>
    </div>

    <div id="c">
      <div id="d">
        <span>職位</span>
        <span style="left:600px">工作地點</span>
      </div>

      <div id="e">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item name="1" @mouseenter.native="change1()" @mouseleave.native="change10()">
            <template slot="title">
              <span style="font-size:20px;position:relative;left:120px;">駐場工程師</span>
              <span style="font-size:20px;position:relative;left:550px;">中國澳門</span>
            </template>
            <div
              style="font-size:16px;line-height:25px;positioni:relative;margin-left:120px;max-width:442px;float:left;height:560px;"
            >
              <b>能力要求</b>

              <p>1、大學本科及以上學歷，計算機或者相關專業，有阿裏雲平臺的運維經驗為佳；</p>
              <p>2、 深入理解Linux系統，掌握Linux系統命令，調優方法；了解運維體系架構，熟悉容量規劃、架構設計及性能優化；</p>
              <p>3、 熟悉壹門以上腳本語言（Python/Shell/PHP等）；熟悉壹門以上開發語言（Java/C/C++等），有開發經驗更佳；</p>
              <p>4、熟悉Docker 容器管理</p>
              <p>5、熟悉常見服務，NTP ,YUM ,DNS ，防火墻等技術</p>
              <p>6、熟悉Myqsl 數據庫， 熟練掌握SQL語句</p>
              <p>7、熟悉大二層網絡、SDN具備網絡故障排查能力。</p>
              <p>8、解虛擬化KVM/XEN、Hadoop/Hbase。</p>
              <p>9、熟悉業界流行的雲平臺架構和技術要點，運維過其中壹種雲平臺架構；</p>
              <p>10、良好的溝通能力和協調能力，強烈的責任心；</p>
              <p>11、有快速分析問題和解決問題的能力，有很好的技術敏感度和風險識別能力；</p>
              <p>12、具有良好的客戶服務意識，善於團隊協作，項目管理。主動思考，自我驅動力強，能夠承受較大的工作壓力，以結果和行動為準則，努力追求成功；</p>
              <p>13、善於總結，有良好的文檔整理能力；</p>
              <p>14、性格穩重、踏實、細心、思考問題思路清晰。</p>
            </div>

            <div
              style="max-width:439px;font-size:16px;line-height:25px;margin-left:95px;float:left;"
            >
              <b>職責範圍</b>
              <p>1、負責用戶專有雲集群的維護、管理、故障排除等日常工作，確保系統的正常穩定運行；</p>
              <p>2、負責用戶資源開通、帳號開通、提供產品使用指引；</p>
              <p>3、負責監控雲集群健康狀態，定時巡檢並做好記錄，按時發送日報周報；</p>
              <p>4、負責專有雲集群各故障處理，及時通報反饋處理；</p>
              <p>5、負責用戶需求收集，及時反饋技術經理；</p>
              <p>6、能夠對用戶需求進行壹定分析，判斷合理性；</p>
              <p>7、要24小時排班。</p>
            </div>

            <div style="font-size:16px;float:right;position:relative;margin-right:355px;top:40px;">
              <div>
                <p>
                  <b>工作地點</b>
                </p>
                <p>中國澳門</p>
              </div>

              <div>
                <p>
                  <b>薪資</b>
                </p>
                <p>面議</p>
              </div>

              <div>
                <p>
                  <b>如您希望應聘本職位，請投遞簡歷到郵箱:</b>
                </p>
                <p>
                  <b>
                    <a href="https://qiye.aliyun.com/alimail/auth/login">ella.lan@inplexmacau.com</a> 蘭小姐
                  </b>
                </p>
              </div>
            </div>

            <div></div>
          </el-collapse-item>
          <el-collapse-item name="2" @mouseenter.native="change2()" @mouseleave.native="change11()">
            <template slot="title">
              <span style="font-size:20px;position:relative;left:120px;">大數據駐場運維</span>
              <span style="font-size:20px;position:relative;left:510px;">中國澳門</span>
            </template>

            <div
              style="font-size:16px;line-height:25px;positioni:relative;margin-left:120px;max-width:442px;float:left;height:570px;"
            >
              <b>能力要求</b>

              <p>1、大學本科及以上學歷，計算機或者相關專業，有阿裏雲平臺的運維經驗為佳；</p>
              <p>2、深入理解Linux系統，掌握Linux系統命令，調優方法；了解運維體系架構，熟悉容量規劃、架構設計及性能優化；</p>
              <p>3、 熟悉壹門以上腳本語言（Python/Shell/PHP等）；熟悉壹門以上開發語言（Java/C/C++等），有開發經驗更佳；</p>
              <p>4、熟悉Docker 容器管理</p>
              <p>5、熟悉常見服務，NTP ,YUM ,DNS ，防火墻等技術</p>
              <p>6、熟悉Myqsl 數據庫， 熟練掌握SQL語句</p>
              <p>7、熟悉大二層網絡、SDN具備網絡故障排查能力。</p>
              <p>8、解虛擬化KVM/XEN、Hadoop/Hbase。</p>
              <p>9、熟悉業界流行的雲平臺架構和技術要點，運維過其中壹種雲平臺架構；</p>
              <p>10、良好的溝通能力和協調能力，強烈的責任心；</p>
              <p>11、有快速分析問題和解決問題的能力，有很好的技術敏感度和風險識別能力；</p>
              <p>12、具有良好的客戶服務意識，善於團隊協作，項目管理。主動思考，自我驅動力強，能夠承受較大的工作壓力，以結果和行動為準則，努力追求成功；</p>
              <p>13、善於總結，有良好的文檔整理能力；</p>
              <p>14、性格穩重、踏實、細心、思考問題思路清晰。</p>
            </div>

            <div
              style="max-width:439px;font-size:16px;line-height:25px;margin-left:95px;float:left;"
            >
              <b>職責範圍</b>
              <p>1、負責用戶專有雲集群的維護、管理、故障排除等日常工作，確保系統的正常穩定運行；</p>
              <p>2、負責用戶資源開通、帳號開通、提供產品使用指引；</p>
              <p>3、負責監控雲集群健康狀態，定時巡檢並做好記錄，按時發送日報周報；</p>
              <p>4、負責專有雲集群各故障處理，及時通報反饋處理；</p>
              <p>5、負責用戶需求收集，及時反饋技術經理；</p>
              <p>6、能夠對用戶需求進行壹定分析，判斷合理性；</p>
              <p>7、要24小時排班。</p>
            </div>

            <div style="font-size:16px;float:right;position:relative;margin-right:355px;top:40px;">
              <div>
                <p>
                  <b>工作地點</b>
                </p>
                <p>中國澳門</p>
              </div>

              <div>
                <p>
                  <b>薪資</b>
                </p>
                <p>面議</p>
              </div>

              <div>
                <p>
                  <b>如您希望應聘本職位，請投遞簡歷到郵箱:</b>
                </p>
                <p>
                  <b>
                    <a href="https://qiye.aliyun.com/alimail/auth/login">ella.lan@inplexmacau.com</a> 蘭小姐
                  </b>
                </p>
              </div>
            </div>

            <div></div>
          </el-collapse-item>

          <el-collapse-item name="3" @mouseenter.native="change3()" @mouseleave.native="change12()">
            <template slot="title">
              <span style="font-size:20px;position:relative;left:120px;">產品經理</span>
              <span style="font-size:20px;position:relative;left:570px;">中國珠海</span>
            </template>
            <div
              style="font-size:16px;line-height:25px;positioni:relative;margin-left:120px;max-width:442px;float:left;height:470px;"
            >
              <b>能力要求</b>

              <p>1、計算機或相關專業，本科及以上學歷，3年以上實際產品經理工作經驗；</p>
              <p>2、有完整的系統產品或者互聯網產品的設計和產品管理經驗，能獨立負責壹個產品項目的設計、運營和管理；</p>
              <p>3、熟練使用墨刀、Axure、Xmind、word、Visio、PPT等產品設計軟件，有設計案例優先；</p>
              <p>4、思路清晰，較強的表達能力，對產品設計，產品分析、數據分析、競爭分析等有獨到的見解。</p>
            </div>

            <div
              style="max-width:439px;font-size:16px;line-height:25px;margin-left:95px;float:left;"
            >
              <b>職責範圍（最好開發轉產品）</b>
              <p>1. 設計公司互聯網產品（車輛安全平臺），對接第三方車輛安全硬件設備等；</p>
              <p>2.具備需求捕捉、產品創新和技術理解能力；</p>
              <p>3.負責產品規劃，包括用戶需求分析、市場和競品、產品體驗及功能設計；</p>
              <p>4. 協調資源推動產品實施，保障項目進度及團隊溝通，保障項目的整體質量；</p>
              <p>5..積極主動，具有良好的職業素養及責任心，執行力強，團隊意識強。</p>
              <p>6. 需熟練使用Springboot、SpringMVC等框架；</p>
            </div>

            <div style="font-size:16px;float:right;position:relative;margin-right:355px;top:10px;">
              <div>
                <p>
                  <b>工作地點</b>
                </p>
                <p>中國珠海</p>
              </div>

              <div>
                <p>
                  <b>薪資</b>
                </p>
                <p>面議</p>
              </div>

              <div>
                <p>
                  <b>如您希望應聘本職位，請投遞簡歷到郵箱:</b>
                </p>
                <p>
                  <b>
                    <a href="https://qiye.aliyun.com/alimail/auth/login">ella.lan@inplexmacau.com</a> 蘭小姐
                  </b>
                </p>
              </div>
            </div>

            <div></div>
          </el-collapse-item>

          <el-collapse-item name="4" @mouseenter.native="change4()" @mouseleave.native="change13()">
            <template slot="title">
              <span style="font-size:20px;position:relative;left:120px;">Java高級工程師</span>
              <span style="font-size:20px;position:relative;left:513px;">中國珠海</span>
            </template>
            <div
              style="font-size:16px;line-height:25px;positioni:relative;margin-left:120px;max-width:442px;float:left;height:570px;"
            >
              <b>能力要求</b>

              <p>1、本科或以上學歷，計算機或相關專業。3至5年年JAVA開發工作經驗。</p>
              <p>2、負責軟件需求分析，承擔架構/高層設計，並負責關鍵模塊設計與實現等工作。</p>
              <p>3、精通數據庫設計，業務建模，有豐富的系統分析及軟件設計經驗。</p>
              <p>4、精通Spring、Spring boot、MyBatis等J2EE開發框架，熟練使用redis等常見的緩存框架。</p>
              <p>5、紮實的編程基礎，精通java開發語言，熟悉jvm，web開發，分布式架構，緩存，消息中間件SOA OSGI、設計模式等核心技術。 對各種開源的框架如Spring、mybatis等有深入的了解；</p>
              <p>6、熟悉Oracle/MySQL/SQLServer等主流關系型數據庫中的壹種；</p>
              <p>7、掌握多線程的開發技術，並具有實際項目經驗。</p>
              <p>8、精通TCPIP、HTTP等協議,熟悉REST、WebService等技術，了解分布式應用。</p>
              <p>9、精通常用設計模式和主流設計工具，能進行系統建模、總體設計；</p>
              <p>10、為人陽光正派，踏實肯幹，積極主動，良好的團隊意識和責任意識。</p>
              <p>11、有k8s及docker項目經驗優化考慮</p>
            </div>

            <div
              style="max-width:439px;font-size:16px;line-height:25px;margin-left:95px;float:left;"
            >
              <b>職責範圍</b>
              <p>1、審核系統需求、拆分和設計功能模塊、實現系統核心業務功能。</p>
              <p>2、識別和解決系統中的關鍵問題、技術難題。</p>
              <p>3、主導數據建模，具有良好的擴展性。</p>
              <p>4、審核小組代碼質量和性能調優。</p>
            </div>

            <div style="font-size:16px;float:right;position:relative;margin-right:355px;top:40px;">
              <div>
                <p>
                  <b>工作地點</b>
                </p>
                <p>中國珠海</p>
              </div>

              <div>
                <p>
                  <b>薪資</b>
                </p>
                <p>面議</p>
              </div>

              <div>
                <p>
                  <b>如您希望應聘本職位，請投遞簡歷到郵箱:</b>
                </p>
                <p>
                  <b>
                    <a href="https://qiye.aliyun.com/alimail/auth/login">ella.lan@inplexmacau.com</a> 蘭小姐
                  </b>
                </p>
              </div>
            </div>

            <div></div>
          </el-collapse-item>

          <el-collapse-item name="5" @mouseover.native="change5()" @mouseleave.native="change14()">
            <template slot="title">
              <span style="font-size:20px;position:relative;left:120px;">C＃軟件工程師</span>
              <span style="font-size:20px;position:relative;left:516px;">中國珠海</span>
            </template>
            <div
              style="font-size:16px;line-height:25px;positioni:relative;margin-left:120px;max-width:442px;float:left;height:520px;"
            >
              <b>能力要求</b>

              <p>1、本科以上學歷，計算機或相關專業，具有三年以上的軟件開發經驗；</p>
              <p>2、熟悉.Net Framework各版本的常用API，能熟練運用委托、泛型、Linq等，掌握多線程、異步、並行處理</p>
              <p>3、精通HTML5、XHTML、CSS，DIV+CSS熟練高效編寫靜態頁面；</p>
              <p>4、對流覽器兼容性有深入了解，熟練、快速、準確的解決前端頁面的瀏覽器兼容性問題；</p>
              <p>5、熟悉移動端主流瀏覽器，及Android與iOS等不同平臺的html5頁面適配；</p>
              <p>6、精通跨瀏覽器的JavaScript腳本編寫；</p>
              <p>7、熟悉SQLServer、Oracle或MySql等常見數據庫中的至少壹種</p>
              <p>8、熟悉Socket和串口等通訊方式，熟悉TCP/IP、Modbus等通訊協議</p>
              <p>9、擁有良好的代碼書寫習慣，代碼整潔規範，並符合W3C標準；</p>
              <p>10、性格樂觀開朗，有較強的自學能力,抗壓能力強，適應高強度工作；有良好的溝通能力，團隊合作精神，並具有高度的責任感。</p>
            </div>

            <div
              style="max-width:439px;font-size:16px;line-height:25px;margin-left:95px;float:left;"
            >
              <b>職責範圍</b>
              <p>1、根據業務要求開發並實現產品功能；</p>
              <p>2、負責web前端頁排版工作；</p>
              <p>3、編寫全站UI，註重兼容性、通用性、可維護性；</p>
              <p>4、JS前端頁面交互設計，提高使用者體驗；</p>
              <p>5、協助項目經理跟進PC端及App端的前端開發工作；</p>
              <p>6、系統日常技術支援和系統維護；</p>
            </div>

            <div style="font-size:16px;float:right;position:relative;margin-right:355px;top:40px;">
              <div>
                <p>
                  <b>工作地點</b>
                </p>
                <p>中國珠海</p>
              </div>

              <div>
                <p>
                  <b>薪資</b>
                </p>
                <p>面議</p>
              </div>

              <div>
                <p>
                  <b>如您希望應聘本職位，請投遞簡歷到郵箱:</b>
                </p>
                <p>
                  <b>
                    <a href="https://qiye.aliyun.com/alimail/auth/login">ella.lan@inplexmacau.com</a> 蘭小姐
                  </b>
                </p>
              </div>
            </div>

            <div></div>
          </el-collapse-item>

          <el-collapse-item name="6" @mouseover.native="change6()" @mouseleave.native="change15()">
            <template slot="title">
              <span style="font-size:20px;position:relative;left:120px;">安全工程師</span>
              <span style="font-size:20px;position:relative;left:549px;">中國澳門</span>
            </template>
            <div
              style="font-size:16px;line-height:25px;positioni:relative;margin-left:120px;max-width:442px;float:left;height:570px;"
            >
              <b>能力要求</b>

              <p>1. 兩年以上工作經歷；（實際技術水平優秀者可降低要求）</p>
              <p>2. 兩年以上信息安全技術領域的正式工作經驗，了解常見安全產品的技術原理及功能；</p>
              <p>3. 熟悉各類主流的安全攻擊手法及其對應的防禦手段；熟練掌握各種安全工具的使用；</p>
              <p>4. 熟練掌握Linux、Windows操作系統的操作使用、安全配置；</p>
              <p>5. 熟悉主流數據庫、應用系統的安全檢測及加固技術；</p>
              <p>6、熟悉常見網絡安全設備的功能；</p>
              <p>7 良好的職業背景，無違法記錄；</p>
            </div>

            <div
              style="max-width:439px;font-size:16px;line-height:25px;margin-left:95px;float:left;"
            >
              <b>職責範圍</b>
              <p>1.客戶現場安全支持；</p>
              <p>2. 雲平台安全基線評估；</p>
              <p>3.客戶租戶業務安全評估；</p>
              <p>4. 雲盾日常安全巡檢 ；</p>
              <p>5雲盾產品接入配置；</p>
              <p>6.雲盾產品策略優化配置、規則升級；</p>
              <p>7.雲產品安全基線優化配置；</p>
              <p>8.安全組策略安全檢查和優化；</p>
              <p>9. 客戶日常交流，定期匯報；</p>
              <p>10.日常安全咨詢，為客戶提供各類安全問題的解答；</p>
              <p>11. 客戶業務上雲時的安全方案評估；</p>
              <p>12. 出現安全事件時，提供現場應急響應工作；</p>
              <p>13. 安全項目經理分派的其他工作 。</p>
            </div>

            <div style="font-size:16px;float:right;position:relative;margin-right:355px;top:40px;height:190px;">
              <div>
                <p>
                  <b>工作地點</b>
                </p>
                <p>中國澳門</p>
              </div>

              <div>
                <p>
                  <b>薪資</b>
                </p>
                <p>面議</p>
              </div>

              <div>
                <p>
                  <b>如您希望應聘本職位，請投遞簡歷到郵箱:</b>
                </p>
                <p>
                  <b>
                    <a href="https://qiye.aliyun.com/alimail/auth/login">ella.lan@inplexmacau.com</a> 蘭小姐
                  </b>
                </p>
              </div>
            </div>

            <div></div>
          </el-collapse-item>

          <el-collapse-item name="7" @mouseover.native="change7()" @mouseleave.native="change16()">
            <template slot="title">
              <span style="font-size:20px;position:relative;left:120px;">弱電項目經理</span>
              <span style="font-size:20px;position:relative;left:530px;">中國珠海</span>
            </template>
            <div
              style="font-size:16px;line-height:25px;positioni:relative;margin-left:120px;max-width:442px;float:left;height:430px;"
            >
              <b>能力要求</b>

              <p> 1、自動化、計算機、電子類相關專業。</p>
              <p> 2、熟悉弱電工程項目設計，具備紮實的弱電專業知識；</p>
              <p>3、能獨立處理日常工作，具有較強的應變能力，能妥善的處理各種突发事件；</p>
              <p>4、具備弱電技術工程師職稱，具有國家認可的造價師資格證書及相關證書優先。</p>
              <p> 5、從事弱電行業1年以上，對智能化弱電項目的施工、設備調試、管理有相關工作經驗；</p>
              <p> 6、熟練使用CAD等制圖軟件，及崗位所需計算機操作系統;</p>
              <p> 7、此崗位主要是對弱電系統設備的調試與維護。</p>
            </div>

            <div
              style="max-width:439px;font-size:16px;line-height:25px;margin-left:95px;float:left;"
            >
              <b>職責範圍</b>
              <p>1、負責項目施工工程中弱電方面的技術支持與審核；</p>
              <p>2、擬訂工程項目弱電設計方案，審核圖紙和施工方案；</p>
              <p>3、負責跟蹤已完工項目智能化系統設備的運維工作；</p>
              <p>4、負責配合公司業務做好與甲方技術溝通交流等售前技術支持；</p>
              <p>5、負責配合公司設計師、預算員等協調智能化方案的編寫及預算等工作。</p>
            </div>

            <div style="font-size:16px;float:right;position:relative;margin-right:355px;top:40px;height:190px;">
              <div>
                <p>
                  <b>工作地點</b>
                </p>
                <p>中國珠海</p>
              </div>

              <div>
                <p>
                  <b>薪資</b>
                </p>
                <p>面議</p>
              </div>

              <div>
                <p>
                  <b>如您希望應聘本職位，請投遞簡歷到郵箱:</b>
                </p>
                <p>
                  <b>
                    <a href="https://qiye.aliyun.com/alimail/auth/login">ella.lan@inplexmacau.com</a> 蘭小姐
                  </b>
                </p>
              </div>
            </div>

            <div></div>
          </el-collapse-item>


          <el-collapse-item name="8" @mouseover.native="change8()" @mouseleave.native="change17()">
            <template slot="title">
              <span style="font-size:20px;position:relative;left:120px;">弱電現場工程師</span>
              <span style="font-size:20px;position:relative;left:510px;">中國珠海</span>
            </template>
            <div
              style="font-size:16px;line-height:25px;positioni:relative;margin-left:120px;max-width:442px;float:left;height:290px;"
            >
              <b>能力要求</b>

              <p> 1、3年以上弱電智能化行業或設計工作相關經驗，熟練工程施工現場的管理熟練；</p>
              <p> 2、熟悉弱電各子系統的實施安裝、調試和維護；</p>
              <p>3、熟練使用office、CAD等軟件，能完成項目過程資料和竣工驗收資料；</p>
              <p>4、有低壓電工證者優先考慮。</p>
            </div>

            <div
              style="max-width:439px;font-size:16px;line-height:25px;margin-left:95px;float:left;"
            >
              <b>職責範圍</b>
              <p>1、負責弱電智能化工程項目現場管理和實施；</p>
              
            </div>

            <div style="font-size:16px;float:right;position:relative;margin-right:355px;top:40px;height:190px;">
              <div>
                <p>
                  <b>工作地點</b>
                </p>
                <p>中國珠海</p>
              </div>

              <div>
                <p>
                  <b>薪資</b>
                </p>
                <p>面議</p>
              </div>

              <div>
                <p>
                  <b>如您希望應聘本職位，請投遞簡歷到郵箱:</b>
                </p>
                <p>
                  <b>
                    <a href="https://qiye.aliyun.com/alimail/auth/login">ella.lan@inplexmacau.com</a> 蘭小姐
                  </b>
                </p>
              </div>
            </div>

            <div></div>
          </el-collapse-item>

          <el-collapse-item name="9" @mouseover.native="change9()" @mouseleave.native="change18()">
            <template slot="title">
              <span style="font-size:20px;position:relative;left:120px;">網絡安全工程師</span>
              <span style="font-size:20px;position:relative;left:510px;">中國澳門</span>
            </template>
            <div
              style="font-size:16px;line-height:25px;positioni:relative;margin-left:120px;max-width:442px;float:left;height:470px;"
            >
              <b>能力要求</b>

              <p> 1、能主動關注國內外最新安全攻防技術，並在自己擅長和感興趣的領域能夠進行深入的學習、研究。</p>
              <p> 2、對攻防技術有深入研究。</p>
              <p>3、熟悉整體信息安全架構、掌握信息安全、網絡安全、系統安全相關專業知識，掌握信息系統應用安全及安全防範理論。熟悉防火牆、WAF、IDS/IPS、防病毒、身份管理、主機安全管理、安全審計、SOC、數據加密、等安全產品。</p>
              <p>4.掌握C/Java/Go/Python等一種或幾種程序語言。</p>
            </div>

            <div
              style="max-width:439px;font-size:16px;line-height:25px;margin-left:95px;float:left;"
            >
              <b>職責範圍</b>
              <p>1、負責入侵檢測、生產系統安全防護和加固、安全漏洞的分析與排除</p>
              <p>2、負責安全體系建設和實施，包括應用安全、數據安全、主機安全、網絡安全等</p>
              <p>3、熟悉整體信息安全架構、掌握信息安全、網絡安全、系統安全相關專業知識，掌握信息系統應用安全及安全防範理論。熟悉防火牆、WAF、IDS/IPS、防病毒、身份管理、主機安全管理、安全審計、SOC、數據加密、等安全產品。</p>
              <p>4、掌握C/Java/Go/Python等一種或幾種程序語言。</p>
              
            </div>

            <div style="font-size:16px;float:right;position:relative;margin-right:355px;top:40px;height:190px;">
              <div>
                <p>
                  <b>工作地點</b>
                </p>
                <p>中國澳門</p>
              </div>

              <div>
                <p>
                  <b>薪資</b>
                </p>
                <p>面議</p>
              </div>

              <div>
                <p>
                  <b>如您希望應聘本職位，請投遞簡歷到郵箱:</b>
                </p>
                <p>
                  <b>
                    <a href="https://qiye.aliyun.com/alimail/auth/login">ella.lan@inplexmacau.com</a> 蘭小姐
                  </b>
                </p>
              </div>
            </div>

            <div></div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "",
    };
  },
  methods: {
    change1() {
      this.activeName = "1";
    },
    change2() {
      this.activeName = "2";
    },
    change3() {
      this.activeName = "3";
    },
    change4() {
      this.activeName = "4";
    },
    change5() {
      this.activeName = "5";
    },
    change6() {
      this.activeName = "6";
    },
    change7() {
      this.activeName = "7";
    },
     change8() {
      this.activeName = "8";
    },
    change9() {
      this.activeName = "9";
    },
    change10() {
      this.activeName = "0"
    },
    change11() {
      this.activeName = "0"
    },
    change12() {
      this.activeName = "0"
    },
    change13() {
      this.activeName = "0"
    },
    change14() {
      this.activeName = "0"
    },
    change15() {
      this.activeName = "0"
    },
    change16() {
      this.activeName = "0"
    },
    change17() {
      this.activeName = "0"
    },
    change18() {
      this.activeName = "0"
    },

       initDate() {   
         this.$router.go(0)    
   }
  },

  beforeDestroy() {
     this.initDate();
  }
};
</script>


<style scoped>
* {
  padding: 0;
  margin: 0;
}
#a {
  background: url(../assets/img/4-1.png) no-repeat  ;
  width: 100%;
  height: 1405px;
  background-size: cover;
  overflow: hidden;
  margin-top: -2px;
  
}

#b p {
  font-size: 60px;
  color: #fff;

  text-align: center;
  margin-top: 259px;
}

#c {
  max-width: 1301px;
  max-height: 1280px;
  width: 1301px;
  height: 1280px;
  display: fixed;
  margin: 0 auto;
  background-size: cover;
}

#d {
  height: 61px;
  max-height: 61px;
  opacity: 0.7;
  background-color: #fff;
  background-size: cover;
  display: fixed;
}

#d span {
  font-size: 20px;
  line-height: 30px;
  position: relative;
  left: 120px;
  top: 20px;
}

#e {
  max-height: 1905px;

  height: 684px;
  opacity: 0.9;
  background-color: #fff;
  background-size: cover;
  display: fixed;
}

/* 媒体查询（手机） */
@media screen and (max-width: 768px) {
  #a {
    background: url(../assets/img/4-1.png) no-repeat;

    width: 100%;
    height: 974px;
    background-size: 100% 100%;
    overflow: hidden;
  }

  #b span {
    font-size: 30px;
    color: #fff;
    max-width: 299px;
    /* position: relative;
   margin-left: 811px;
   top: 159px;
   text-align: center; */
    text-align: center;
    position: relative;
    left: 400px;
  }
}
</style>