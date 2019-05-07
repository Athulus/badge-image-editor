import React from 'react'
import Grid from '@material-ui/core/Grid';
import MonacoEditor from 'react-monaco-editor';

class Editor extends React.Component {
    constructor() {
        super()
        this.canvas = "";
        this.ctx = "";
        this.currentX = 0;
        this.currentY = 0;
        this.previousX = 0;
        this.previousY = 0;
        this.dot_flag = false;
        this.strokeColor = "black";
        this.lineWidth = 3;
    }
    componentDidMount = () => {
        console.log("CANVAS", this.refs.canvas);
        this.canvas = this.refs.canvas
        this.ctx = this.canvas.getContext("2d");
    }
    draw = () => {
        console.log("CONTEXT ", this.ctx);
        this.ctx.beginPath();
        this.ctx.moveTo(this.previousX, this.previousY);
        this.ctx.lineTo(this.currentX, this.currentY);
        this.ctx.strokeStyle = this.strokeColor;
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.stroke();
        this.ctx.closePath();
    }
    moveMouse = (movement, evt) => {
        if (movement === "up") {
            console.log("UP")
        }
        if (movement === "down") {
            console.log("DOWN")
        }
        if (movement === "out") {
            console.log("OUT")
        }
        if (movement === "move") {
            console.log("MOVE")
        }
    }
    render() {
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Badge Image Editor</h1>
                <Grid container>
                    <Grid item xs={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <canvas
                            onMouseMove={(evt) => this.moveMouse("move", evt)}
                            onMouseDown={(evt) => this.moveMouse("down", evt)}
                            onMouseUp={(evt) => this.moveMouse("up", evt)}
                            onMouseOut={(evt) => this.moveMouse("out", evt)}
                            ref="canvas"
                            width={512}
                            height={512}
                            style={{ border: '3px solid black' }}>
                        </canvas>
                    </Grid>
                    <Grid item xs={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <MonacoEditor
                            width="500"
                            height="550"
                            language="cpp"
                            theme="vs-dark"
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default Editor