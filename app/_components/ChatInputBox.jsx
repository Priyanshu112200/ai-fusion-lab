           {/* Fixed Bottom Line */}
           <div className="fixed left-0 w-full bg-white dark:bg-background shadow-sm border-b z-10" style={{bottom: '0px'}}></div>
import { Button } from '@/components/ui/button'
import { Mic, Paperclip, Send } from 'lucide-react'
import React from 'react'
import AiMultiModels from './AiMultiModels'

function ChatInputBox() {
  return (
    <div className='relative min-h-screen'>
        {/* Page Content */}
        <div>
           <AiMultiModels />
        </div>
          {/* Fixed Bottom Line */}
          <div className="fixed left-0 w-full bg-white dark:bg-background shadow-sm border-b z-10" style={{bottom: '0px'}}></div>
        {/* Fixed Chat Input - Overlapping the line */}
        <div className='fixed bottom-0 left-0 w-full flex justify-center px-4 pb-4 z-20' style={{pointerEvents: 'auto'}}>
            <div className='w-full border border-t rounded-xl shadow-md max-w-2xl p-4 relative z-30 bg-transparent' style={{marginBottom: '-8px'}}>
                <input type="text" placeholder='Ask Me Anything...' className='border-0 outline-none bg-transparent' />
                <div className='mt-3 flex justify-between items-center'>
                    <Button className={''} variant={'ghost'} size={'icon'}>
                        <Paperclip className='h-5 w-5' />
                    </Button>
                    <div className='flex gap-5'>
                        <Button variant={'ghost'} size={'icon'}><Mic /></Button>
                        <Button size={'icon'} className={'bg-blue-600'}><Send /></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatInputBox