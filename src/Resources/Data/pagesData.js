import web1_l from "../ProjectPagesImage/web/web1_l.jpg";
import web2_l from "../ProjectPagesImage/web/web2_l.jpg";
import web1_s from "../ProjectPagesImage/web/web1_s.jpg";
import web2_s from "../ProjectPagesImage/web/web2_s.jpg";
import web3_s from "../ProjectPagesImage/web/web3_s.jpg";

import product1_l from "../ProjectPagesImage/product/product1_l.jpg";
import product2_l from "../ProjectPagesImage/product/product2_l.jpg";
import product1_s from "../ProjectPagesImage/product/product1_s.jpg";
import product3_s from "../ProjectPagesImage/product/product3_s.jpg";
import product4_s from "../ProjectPagesImage/product/product4_s.jpg";

const data = [
  {
    page: "productdesign",
    mainImg: product1_s,
    alt: "Product Design",
    label: "Product Design",
    titleRows: ["Product Design"],
    badges: ["Product Design"],
    images: [product1_l, product2_l, product4_s, product3_s],
    labels: [
      { title: "Client", content: "Max" },
      { title: "Studio", content: "Max" },
      { title: "Role", content: "Max" },
      { title: "Focus", content: "Product Design" },
    ],
  },
  {
    page: "webdesign",
    mainImg: web1_s,
    alt: "Web Design",
    label: "Web Design",
    titleRows: ["Web Design"],
    badges: ["Web Design"],
    images: [web1_l, web2_l, web2_s, web3_s],
    labels: [
      { title: "Client", content: "Max" },
      { title: "Studio", content: "Max" },
      { title: "Role", content: "Max" },
      { title: "Focus", content: "Web Design" },
    ],
  },
];

export default data;
