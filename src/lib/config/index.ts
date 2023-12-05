import { dev } from '$app/environment';

const title = 'Islam Zaoui - Navigating the Digital Landscape';
const titleAR = 'Islam Zaoui - تصفح المشهد الرقمي';

const name = 'Islam Zaoui';

const Sitedescription = "Discover a digital park filled with valuable resources for developers at Islam Zaoui's website. Explore now for useful tools and insights!";
const SitedescriptionAR = "اكتشف حديقة رقمية مليئة بالموارد القيمة للمطورين على موقع إسلام زاوي. استكشف الآن للحصول على أدوات ورؤى مفيدة!";

const Postdescription = "Islam Zaoui's Blog posts - Discover a treasure trove of insightful articles and captivating content. Explore now and enrich your knowledge! 💖";
const PostdescriptionAR = "منشورات مدونة Islam Zaoui - اكتشف كنزًا من المقالات الثاقبة والمحتوى الجذاب. اكتشف الآن وأثري معلوماتك! 💖";

const url = dev ? 'http://localhost:5173/' : 'https://islamzaoui.top/';

const siteImage = `${url}asset/avatar.webp` as const

const StatsUrl = "https://islamzaoui-blog.goatcounter.com/"

const ProfileURL = {
    github: "https://github.com/IslamZaoui",
    linkedin: "https://www.linkedin.com/in/zaouiislam/",
    youtube: "https://www.youtube.com/@IslamZaoui_",
    x: "https://twitter.com/IslamZaoui_",
    kofi: "https://ko-fi.com/islamzaoui"
} as const

const xHandle = "@IslamZaoui_"

export default {
    title,
    titleAR,
    name,
    Sitedescription,
    SitedescriptionAR,
    Postdescription,
    PostdescriptionAR,
    url,
    siteImage,
    StatsUrl,
    ProfileURL,
    xHandle
}