import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/Model/User/user";
import { UserService } from "src/app/Service/UserService/user.service";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  hidden?: (userProfile: User) => boolean; // Define hidden property as optional function
}

export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: "ni-tv-2 text-primary",
    class: "",
  },
  {
    path: "/user-profile",
    title: "User profile",
    icon: "ni-single-02 text-yellow",
    class: "",
  },
  {
    path: "/login",
    title: "Login",
    icon: "ni-key-25 text-info",
    class: "",
    hidden: userProfileExists,
  },
  {
    path: "/register",
    title: "Register",
    icon: "ni-circle-08 text-pink",
    class: "",
    hidden: userProfileExists,
  },
  {
    path: "/serviceType",
    title: "service",
    icon: "ni-book-bookmark text-red",
    class: "",
    hidden: userProfileEmp,
  },
  {
    path: "/priseRendezVous",
    title: "rendez vous",
    icon: "ni-single-copy-04 text-red",
    class: "",
    hidden: userProfileClient,
  },
  {
    path: "/ajoutMobileMoney",
    title: "Mobile money",
    icon: "ni-money-coins text-green",
    class: "",
    hidden: userProfileClient,
  },
  {
    path: "/personnel",
    title: "Personnel",
    icon: "ni-badge text-green",
    class: "",
    hidden: userProfileManger,
  },
    { path: '/RendezVous', title: 'RendezVous',  icon:'ni-watch-time text-blue', class: '' },
    { path: '/Solde', title: 'Solde',  icon:'ni-money-coins text-blue', class: '' },
    { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/testPage', title: 'Page de test',  icon:'ni-bullet-list-67 text-red', class: '' }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;
  public UserProfile: User = new User();

  constructor(private router: Router, private user: UserService) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
    this.getUser();
  }

  public getUser() {
    try {
      this.user.GetUserByToken().subscribe((response: any) => {
        this.UserProfile = response.user;
        console.log(this.UserProfile);
        this.updateMenuItems();
      });
    } catch (error) {
      console.error(error);
    }
  }

  private updateMenuItems() {
    this.menuItems = ROUTES.filter((menuItem) => {
      return menuItem.hidden ? menuItem.hidden(this.UserProfile) : true;
    });
  }
}

function userProfileExists() {
  return !!this.UserProfile;
}
function userProfileEmp(userProfile: User): boolean {
  console.log(userProfile);
  return userProfile.role === "employe";
}
function userProfileManger(userProfile: User): boolean {
  console.log(userProfile);
  return userProfile.role === "manager";
}
function userProfileClient(userProfile: User): boolean {
  console.log(userProfile);
  return userProfile.role === "client";
}
