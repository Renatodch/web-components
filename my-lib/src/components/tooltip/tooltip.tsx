import {Component,h,Method, Prop} from '@stencil/core'

@Component({
    tag:'uc-tooltip',
    shadow:true,
    styleUrl:'./tooltip.css'
})
export class Tooltip{
    @Prop({reflect:true}) content:string; 
    @Prop({reflect:true, mutable: true}) showed=false;

    @Method()
    show(){
        this.showed = !this.showed;
    }

    render(){
        let tooltip = null;
        if(this.showed){
            tooltip = <div id="content">{this.content}</div>
        }
        return [
            <slot/>,
            <span id="quote-mark" onClick={this.show.bind(this)}>
             ?
            </span>,
            tooltip
        ];
    }
}