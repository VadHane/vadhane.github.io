export enum SocialImagesUrls {
  instagram = "img/instagram.png",
  telegram = "img/telegram.png",
  facebook = "img/facebook.png",
  tiktok = "img/tiktok.png",
}

export interface SocialPage {
  name: string;
  url: string;
  imageUrl: string;
}

export interface Member {
  name: string;
  staff: string;
  imgUrl: string;
  links: SocialPage[];
}
