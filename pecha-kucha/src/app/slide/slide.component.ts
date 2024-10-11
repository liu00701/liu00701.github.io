import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {interval} from "rxjs";

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  id: number;

  progress: number;
  code1: string = `<pre class="prism-code language-java" style="color: rgb(156, 220, 254); background-color: rgb(30, 30, 30);"><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token keyword" style="color: rgb(86, 156, 214);">public</span><span class="token plain"> </span><span class="token keyword" style="color: rgb(86, 156, 214);">class</span><span class="token plain"> </span><span class="token class-name" style="color: rgb(78, 201, 176);">HelloContinuations</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(212, 212, 212);">{</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">    </span><span class="token keyword" style="color: rgb(86, 156, 214);">public</span><span class="token plain"> </span><span class="token keyword" style="color: rgb(86, 156, 214);">static</span><span class="token plain"> </span><span class="token keyword" style="color: rgb(86, 156, 214);">void</span><span class="token plain"> </span><span class="token function" style="color: rgb(220, 220, 170);">main</span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token class-name" style="color: rgb(78, 201, 176);">String</span><span class="token punctuation" style="color: rgb(212, 212, 212);">[</span><span class="token punctuation" style="color: rgb(212, 212, 212);">]</span><span class="token plain"> args</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token plain"> </span><span class="token keyword" style="color: rgb(86, 156, 214);">throws</span><span class="token plain"> </span><span class="token class-name" style="color: rgb(78, 201, 176);">InterruptedException</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(212, 212, 212);">{</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">        </span><span class="token keyword" style="color: rgb(86, 156, 214);">var</span><span class="token plain"> scope </span><span class="token operator" style="color: rgb(212, 212, 212);">=</span><span class="token plain"> </span><span class="token keyword" style="color: rgb(86, 156, 214);">new</span><span class="token plain"> </span><span class="token class-name" style="color: rgb(78, 201, 176);">ContinuationScope</span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token string" style="color: rgb(206, 145, 120);">"demo"</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token punctuation" style="color: rgb(212, 212, 212);">;</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">        </span><span class="token keyword" style="color: rgb(86, 156, 214);">var</span><span class="token plain"> cont </span><span class="token operator" style="color: rgb(212, 212, 212);">=</span><span class="token plain"> </span><span class="token keyword" style="color: rgb(86, 156, 214);">new</span><span class="token plain"> </span><span class="token class-name" style="color: rgb(78, 201, 176);">Continuation</span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token plain">scope</span><span class="token punctuation" style="color: rgb(212, 212, 212);">,</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token plain"> </span><span class="token operator" style="color: rgb(212, 212, 212);">-&gt;</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(212, 212, 212);">{</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">            </span><span class="token class-name" style="color: rgb(78, 201, 176);">System</span><span class="token punctuation" style="color: rgb(212, 212, 212);">.</span><span class="token plain">out</span><span class="token punctuation" style="color: rgb(212, 212, 212);">.</span><span class="token function" style="color: rgb(220, 220, 170);">println</span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token string" style="color: rgb(206, 145, 120);">"A"</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token punctuation" style="color: rgb(212, 212, 212);">;</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">            </span><span class="token class-name" style="color: rgb(78, 201, 176);">Continuation</span><span class="token punctuation" style="color: rgb(212, 212, 212);">.</span><span class="token function" style="color: rgb(220, 220, 170);">yield</span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token plain">scope</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token punctuation" style="color: rgb(212, 212, 212);">;</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">            </span><span class="token class-name" style="color: rgb(78, 201, 176);">System</span><span class="token punctuation" style="color: rgb(212, 212, 212);">.</span><span class="token plain">out</span><span class="token punctuation" style="color: rgb(212, 212, 212);">.</span><span class="token function" style="color: rgb(220, 220, 170);">println</span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token string" style="color: rgb(206, 145, 120);">"B"</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token punctuation" style="color: rgb(212, 212, 212);">;</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">            </span><span class="token class-name" style="color: rgb(78, 201, 176);">Continuation</span><span class="token punctuation" style="color: rgb(212, 212, 212);">.</span><span class="token function" style="color: rgb(220, 220, 170);">yield</span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token plain">scope</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token punctuation" style="color: rgb(212, 212, 212);">;</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">            </span><span class="token class-name" style="color: rgb(78, 201, 176);">System</span><span class="token punctuation" style="color: rgb(212, 212, 212);">.</span><span class="token plain">out</span><span class="token punctuation" style="color: rgb(212, 212, 212);">.</span><span class="token function" style="color: rgb(220, 220, 170);">println</span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token string" style="color: rgb(206, 145, 120);">"C"</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token punctuation" style="color: rgb(212, 212, 212);">;</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">        </span><span class="token punctuation" style="color: rgb(212, 212, 212);">}</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token punctuation" style="color: rgb(212, 212, 212);">;</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain" style="display: inline-block;"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">        </span><span class="token keyword" style="color: rgb(86, 156, 214);">while</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token operator" style="color: rgb(212, 212, 212);">!</span><span class="token plain">cont</span><span class="token punctuation" style="color: rgb(212, 212, 212);">.</span><span class="token function" style="color: rgb(220, 220, 170);">isDone</span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(212, 212, 212);">{</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">            </span><span class="token class-name" style="color: rgb(78, 201, 176);">System</span><span class="token punctuation" style="color: rgb(212, 212, 212);">.</span><span class="token plain">out</span><span class="token punctuation" style="color: rgb(212, 212, 212);">.</span><span class="token function" style="color: rgb(220, 220, 170);">println</span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token string" style="color: rgb(206, 145, 120);">"Run"</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token punctuation" style="color: rgb(212, 212, 212);">;</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">            </span><span class="token class-name" style="color: rgb(78, 201, 176);">Thread</span><span class="token punctuation" style="color: rgb(212, 212, 212);">.</span><span class="token function" style="color: rgb(220, 220, 170);">sleep</span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token number" style="color: rgb(181, 206, 168);">1000</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token punctuation" style="color: rgb(212, 212, 212);">;</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">            cont</span><span class="token punctuation" style="color: rgb(212, 212, 212);">.</span><span class="token function" style="color: rgb(220, 220, 170);">run</span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token punctuation" style="color: rgb(212, 212, 212);">;</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">        </span><span class="token punctuation" style="color: rgb(212, 212, 212);">}</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">    </span><span class="token punctuation" style="color: rgb(212, 212, 212);">}</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain"></span><span class="token punctuation" style="color: rgb(212, 212, 212);">}</span></div></pre>`;
  code1out: string = `<pre class="prism-code language-" style="color: rgb(156, 220, 254); background-color: rgb(30, 30, 30);"><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">Run</span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">A</span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">Run</span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">B</span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">Run</span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">C</span></div></pre>`;
  code2: string = `<pre class="prism-code language-java" style="color: rgb(156, 220, 254); background-color: rgb(30, 30, 30);"><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token class-name" style="color: rgb(78, 201, 176);">Runnable</span><span class="token plain"> task </span><span class="token operator" style="color: rgb(212, 212, 212);">=</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token plain"> </span><span class="token operator" style="color: rgb(212, 212, 212);">-&gt;</span><span class="token plain"> </span><span class="token function" style="color: rgb(220, 220, 170);">doSomething</span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token punctuation" style="color: rgb(212, 212, 212);">;</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain" style="display: inline-block;"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain"></span><span class="token keyword" style="color: rgb(86, 156, 214);">try</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token keyword" style="color: rgb(86, 156, 214);">var</span><span class="token plain"> scope </span><span class="token operator" style="color: rgb(212, 212, 212);">=</span><span class="token plain"> </span><span class="token class-name" style="color: rgb(78, 201, 176);">FiberScope</span><span class="token punctuation" style="color: rgb(212, 212, 212);">.</span><span class="token keyword" style="color: rgb(86, 156, 214);">open</span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(212, 212, 212);">{</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">    </span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">    </span><span class="token keyword" style="color: rgb(86, 156, 214);">for</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token keyword" style="color: rgb(86, 156, 214);">int</span><span class="token plain"> i</span><span class="token operator" style="color: rgb(212, 212, 212);">=</span><span class="token number" style="color: rgb(181, 206, 168);">0</span><span class="token punctuation" style="color: rgb(212, 212, 212);">;</span><span class="token plain"> i</span><span class="token operator" style="color: rgb(212, 212, 212);">&lt;</span><span class="token number" style="color: rgb(181, 206, 168);">5_000_000</span><span class="token punctuation" style="color: rgb(212, 212, 212);">;</span><span class="token plain"> i</span><span class="token operator" style="color: rgb(212, 212, 212);">++</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token plain"> </span><span class="token punctuation" style="color: rgb(212, 212, 212);">{</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">        </span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">        </span><span class="token keyword" style="color: rgb(86, 156, 214);">var</span><span class="token plain"> fiber </span><span class="token operator" style="color: rgb(212, 212, 212);">=</span><span class="token plain"> scope</span><span class="token punctuation" style="color: rgb(212, 212, 212);">.</span><span class="token function" style="color: rgb(220, 220, 170);">schedule</span><span class="token punctuation" style="color: rgb(212, 212, 212);">(</span><span class="token plain">task</span><span class="token punctuation" style="color: rgb(212, 212, 212);">)</span><span class="token punctuation" style="color: rgb(212, 212, 212);">;</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">        </span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">    </span><span class="token punctuation" style="color: rgb(212, 212, 212);">}</span><span class="token plain"></span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain">    </span></div><div class="token-line" style="color: rgb(156, 220, 254);"><span class="token plain"></span><span class="token punctuation" style="color: rgb(212, 212, 212);">}</span></div></pre>`;

  private showTime = 200;

  private startTime: number;
  private newTime: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get("id");
      this.startTime = new Date().getTime();
    });

    interval(50).subscribe(() => this.updateTimeline());

  }

  @HostListener('document:keydown', ['$event'])
  public async switchDayFromKeyboard(event: KeyboardEvent) {
    if (event.target['tagName'] == "INPUT") {
      return;
    }

    let key = event.key;
    if (key == "ArrowLeft") {
      await this.switchSlide(this.id - 1);
    }
    if (key == "ArrowRight") {
      await this.switchSlide(this.id + 1);
    }

  }

  private async switchSlide(id: number) {
    if (id < 1) {
      await this.router.navigate(['/'], {relativeTo: this.route,});
    }
    await this.router.navigate(['/slide', id], {relativeTo: this.route,});
  }


  private async updateTimeline() {
    if (this.id > 20) {
      this.progress = 0;
      return
    }
    if (this.id < 1) {
      this.progress = 0;
      return
    }
    this.newTime = new Date().getTime();
    this.progress = (this.newTime - this.startTime) / 1000 / this.showTime * 100;

    if (this.progress >= 100) {
      await this.switchSlide(this.id + 1);
    }

  }
}