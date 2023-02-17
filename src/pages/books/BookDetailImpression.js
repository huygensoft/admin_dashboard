import React from 'react'
import ProgressBar from 'react-customizable-progressbar'

export default function BookDetailImpression() {


  const p1 = 75;
  const p2 = 25;
  const p3 = 64;
  const p4 = 80;
  const p5 = 55;

  return (
    <div className='book-impression-container'>
        <div className='imp-downloads'>
            <h3 className='imp-title t-1'>No of Downloads</h3>
            <div className='imp-inner-left'>
            <div className='text-position'>
                  {/* all time */}
                    {p4 > 49 ?
                        <div>
                            <ProgressBar
                                    radius={70}
                                    progress={p4}
                                    strokeWidth={8}
                                    strokeColor="seagreen"
                                    trackStrokeWidth={10}
                                />
                                <div className='inner-content'>
                                    <div className='percent'>{p4}%</div>
                                    <div className='text'>All Time</div>
                                </div>
                        </div>
                        :
                        <div>
                            <ProgressBar
                                radius={70}
                                progress={p4}
                                strokeWidth={8}
                                strokeColor="orange"
                                trackStrokeWidth={10}
                            />
                            <div className='inner-content'>
                                <div className='percent'>{p4}%</div>
                                <div className='text'>All Time</div>
                            </div>
                        </div>    
                    }
                </div>

            {/* this year  */}
            <div className='text-position'>
                    {p5 > 49 ?
                        <div>
                            <ProgressBar
                                    radius={70}
                                    progress={p5}
                                    strokeWidth={8}
                                    strokeColor="seagreen"
                                    trackStrokeWidth={10}
                                />
                                <div className='inner-content'>
                                    <div className='percent'>{p5}%</div>
                                    <div className='text'>This Year</div>
                                </div>
                        </div>
                        :
                        <div>
                            <ProgressBar
                                radius={70}
                                progress={p5}
                                strokeWidth={8}
                                strokeColor="orange"
                                trackStrokeWidth={10}
                            />
                            <div className='inner-content'>
                                <div className='percent'>{p5}%</div>
                                <div className='text'>This year</div>
                            </div>
                        </div>    
                    }
                </div>
            </div>
        </div>


        {/* --------------------------------------------- */}
        <div className='imp-right'>
            <div className='title-container'>
                <h3 className='imp-title'>Exposure</h3>
                <h3 className='imp-title'>No of Shares</h3>
                <h3 className='imp-title'>No of Likes</h3>
            </div>
            <div className='imp-inner-right'>
                <div className='text-position'>
                  {/* Exposure */}
                    {p1 > 49 ?
                        <div>
                            <ProgressBar
                                    radius={70}
                                    progress={p1}
                                    strokeWidth={8}
                                    strokeColor="seagreen"
                                    trackStrokeWidth={10}
                                />
                                <div className='inner-content'>
                                    <div className='percent'>{p1}%</div>
                                    <div className='text'>Readers</div>
                                </div>
                        </div>
                        :
                        <div>
                            <ProgressBar
                                radius={70}
                                progress={p1}
                                strokeWidth={8}
                                strokeColor="orange"
                                trackStrokeWidth={10}
                            />
                            <div className='inner-content'>
                                <div className='percent'>{p1}%</div>
                                <div className='text'>Readers</div>
                            </div>
                        </div>    
                    }
                </div>

            {/* Writers  */}
            <div className='text-position'>
                    {p2 > 49 ?
                        <div>
                            <ProgressBar
                                    radius={70}
                                    progress={p2}
                                    strokeWidth={8}
                                    strokeColor="seagreen"
                                    trackStrokeWidth={10}
                                />
                                <div className='inner-content'>
                                    <div className='percent'>{p2}%</div>
                                    <div className='text'>Writers</div>
                                </div>
                        </div>
                        :
                        <div>
                            <ProgressBar
                                radius={70}
                                progress={p2}
                                strokeWidth={8}
                                strokeColor="orange"
                                trackStrokeWidth={10}
                            />
                            <div className='inner-content'>
                                <div className='percent'>{p2}%</div>
                                <div className='text'>Writers</div>
                            </div>
                        </div>    
                    }
                </div>

             {/* all time */}
            <div className='text-position'>
                    {p3 > 49 ?
                        <div>
                            <ProgressBar
                                    radius={70}
                                    progress={p3}
                                    strokeWidth={8}
                                    strokeColor="seagreen"
                                    trackStrokeWidth={10}
                                />
                                <div className='inner-content'>
                                    <div className='percent'>{p3}%</div>
                                    <div className='text'>All Time</div>
                                </div>
                        </div>
                        :
                        <div>
                            <ProgressBar
                                radius={70}
                                progress={p3}
                                strokeWidth={8}
                                strokeColor="orange"
                                trackStrokeWidth={10}
                            />
                            <div className='inner-content'>
                                <div className='percent'>{p3}%</div>
                                <div className='text'>All Time</div>
                            </div>
                        </div>    
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
