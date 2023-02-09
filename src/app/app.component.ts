import { Component } from "@angular/core";
import { PostService } from "./shared/services/post/post.service";
import { Post } from "./shared/models/post/post.modele";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public posts: Array<Post>;
  public isLoading: boolean;

  constructor(private postService: PostService) {
    this.init();
  }

  public init(): void {
    this.posts = [];
    this.isLoading = true;
    this.postService.loadAll().subscribe(
      (list: Array<Post>) => {
        this.posts = list;
      },
      () => {
        //TODO : error
      },
      () => {
        console.log("ICICICIIC");
        this.isLoading = false;
      }
    );
  }
}
